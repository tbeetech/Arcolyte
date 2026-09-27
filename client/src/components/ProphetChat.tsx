import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, ChevronDown, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest, getApiErrorMessage } from "@/lib/queryClient";
import { useQuery } from "@tanstack/react-query";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ── Inline markdown parser ────────────────────────────────────────────────────
function parseInline(text: string, baseKey: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let buf = "";
  let i = 0;
  let k = 0;

  const flush = () => {
    if (buf) {
      nodes.push(<span key={`${baseKey}-t${k++}`}>{buf}</span>);
      buf = "";
    }
  };

  while (i < text.length) {
    if (text[i] === "*" && text[i + 1] === "*") {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        flush();
        nodes.push(<strong key={`${baseKey}-b${k++}`}>{text.slice(i + 2, end)}</strong>);
        i = end + 2;
        continue;
      }
    }
    if (text[i] === "*") {
      const end = text.indexOf("*", i + 1);
      if (end !== -1) {
        flush();
        nodes.push(<em key={`${baseKey}-i${k++}`}>{text.slice(i + 1, end)}</em>);
        i = end + 1;
        continue;
      }
    }
    if (text[i] === "`") {
      const end = text.indexOf("`", i + 1);
      if (end !== -1) {
        flush();
        nodes.push(
          <code
            key={`${baseKey}-c${k++}`}
            className="bg-muted px-1 rounded-sm font-mono text-sm"
          >
            {text.slice(i + 1, end)}
          </code>
        );
        i = end + 1;
        continue;
      }
    }
    buf += text[i];
    i++;
  }
  flush();
  return nodes;
}

function formatProphetMessage(content: string): ReactNode {
  const lines = content.split("\n");
  return (
    <>
      {lines.map((line, li) => {
        const trimmed = line.trimStart();

        if (trimmed === "") return <div key={li} className="h-2" aria-hidden="true" />;

        // Headings
        if (trimmed.startsWith("### ")) {
          return (
            <p key={li} className="font-semibold mt-2 mb-1 text-sm text-foreground">
              {parseInline(trimmed.slice(4), `${li}`)}
            </p>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <p key={li} className="font-bold mt-3 mb-1 text-sm text-foreground">
              {parseInline(trimmed.slice(3), `${li}`)}
            </p>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <p key={li} className="font-bold mt-4 mb-2 text-base text-foreground">
              {parseInline(trimmed.slice(2), `${li}`)}
            </p>
          );
        }

        // Bullet lists (- or *)
        const bulletMatch = trimmed.match(/^[-*]\s+(.*)/);
        if (bulletMatch) {
          return (
            <div key={li} className="flex gap-2 items-start ml-2 text-sm text-foreground">
              <span className="shrink-0">•</span>
              <span>{parseInline(bulletMatch[1], `${li}`)}</span>
            </div>
          );
        }

        // Numbered lists
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={li} className="flex gap-2 items-start ml-2 text-sm text-foreground">
              <span className="shrink-0">{numMatch[1]}.</span>
              <span>{parseInline(numMatch[2], `${li}`)}</span>
            </div>
          );
        }

        return (
          <p key={li} className={`text-sm text-foreground ${li > 0 ? "mt-1" : ""}`}>
            {parseInline(line, `${li}`)}
          </p>
        );
      })}
    </>
  );
}

const OPENING_LINES = [
  "Prophet Online. I am your AI assistant.",
  "I can help with coding, research, analysis, and information about our services.",
];

const ALL_STARTER_QUESTIONS = [
  "What services does ARCOLYTE TECHNOLOGIES offer?",
  "How can AI automation help my business?",
  "How do I get started with ARCOLYTE TECHNOLOGIES?",
  "What makes ARCOLYTE TECHNOLOGIES different?",
  "Can you explain the Digital Maturity Assessment?",
  "How long does a typical project take?",
  "What industries do you work with?",
];

function pickRandomQuestions(n = 3): string[] {
  const shuffled = [...ALL_STARTER_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export default function ProphetChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: OPENING_LINES[0] + " " + OPENING_LINES[1] },
  ]);
  const [starterQuestions, setStarterQuestions] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: statusData, isLoading: statusLoading } = useQuery<{ enabled: boolean }>({
    queryKey: ["/api/prophet/status"],
    queryFn: async () => {
      const res = await fetch("/api/prophet/status");
      if (!res.ok) {
        console.error("[ProphetChat] Status check failed:", res.status);
        return { enabled: false };
      }
      return res.json();
    },
    refetchInterval: 10000,
  });

  const prophetEnabled = !statusLoading && statusData?.enabled === true;

  useEffect(() => {
    if (!prophetEnabled && open) {
      setOpen(false);
      setMinimized(false);
      setFullscreen(false);
    }
  }, [prophetEnabled, open]);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open, minimized]);

  // Pick random starter questions each time the chat opens
  useEffect(() => {
    if (open) {
      setStarterQuestions(pickRandomQuestions(3));
    }
  }, [open]);

  async function sendMessage(text?: string) {
    const msgText = (text ?? input).trim();
    if (!msgText || loading) return;
    const userMsg: ChatMessage = { role: "user", content: msgText };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setStarterQuestions([]); // Hide starters after first message
    setLoading(true);
    try {
      const res = await apiRequest("POST", "/api/prophet", {
        messages: next.map(({ role, content }) => ({ role, content })),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (err: any) {
      const errText = getApiErrorMessage(err, "Signal lost. Try again.");
      setMessages([...next, { role: "assistant", content: `⚠ ${errText}` }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function handleClose() {
    setOpen(false);
    setMinimized(false);
    setFullscreen(false);
  }

  function handleMinimize() {
    setMinimized((v) => !v);
  }

  return (
    <>
      {/* ── Trigger button ── */}
      <AnimatePresence>
        {!open && prophetEnabled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={() => { setOpen(true); setFullscreen(false); setMinimized(false); }}
            data-testid="prophet-chat-trigger"
            aria-label="Open Prophet AI"
            className="fixed z-40 flex items-center gap-2 cursor-pointer select-none top-20 right-6 bg-foreground text-background border border-border px-4 py-2 hover:bg-muted-foreground transition-colors shadow-sm"
          >
            <span className="relative flex items-center gap-2 font-bold tracking-wide text-xs">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 1 0 10 10" />
                <path d="M12 6v6l4 2" />
                <circle cx="20" cy="4" r="2" fill="currentColor" />
              </svg>
              PROPHET AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            data-testid="prophet-chat-panel"
            className={`fixed z-50 flex flex-col overflow-hidden bg-background border border-border shadow-2xl ${
              fullscreen
                ? "top-0 left-0 right-0 bottom-0"
                : "top-20 right-6 w-[min(420px,calc(100vw-48px))]"
            }`}
            style={{
              maxHeight: minimized ? "48px" : fullscreen ? "100%" : "640px",
              transition: "max-height 0.25s ease",
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between px-5 py-3 shrink-0 cursor-pointer select-none bg-muted border-b border-border"
              onClick={handleMinimize}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                <span className="font-bold text-xs tracking-wider text-foreground">
                  PROPHET AI
                </span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <button
                  aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
                  className="p-1 rounded hover:bg-black/5 hover:text-foreground transition-colors"
                  onClick={(e) => { e.stopPropagation(); setFullscreen((v) => !v); }}
                >
                  {fullscreen ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  aria-label={minimized ? "Expand Prophet" : "Minimize Prophet"}
                  className="p-1 rounded hover:bg-black/5 hover:text-foreground transition-colors"
                  onClick={(e) => { e.stopPropagation(); handleMinimize(); }}
                >
                  <ChevronDown
                    className="w-4 h-4 transition-transform"
                    style={{ transform: minimized ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <button
                  aria-label="Close Prophet"
                  data-testid="prophet-chat-close"
                  className="p-1 rounded hover:bg-black/5 hover:text-foreground transition-colors"
                  onClick={(e) => { e.stopPropagation(); handleClose(); }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            {!minimized && (
              <div
                className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4 bg-background"
                style={{ scrollbarWidth: "thin" }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      msg.role === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-foreground mb-1">
                      {msg.role === "user" ? "You" : "Prophet"}
                    </span>
                    <div
                      className={`px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground border border-border"
                      }`}
                    >
                      {msg.role === "assistant" ? formatProphetMessage(msg.content) : msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex flex-col self-start items-start max-w-[85%]">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-foreground mb-1">
                      Prophet
                    </span>
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted text-foreground border border-border">
                      <Loader2 className="w-4 h-4 animate-spin text-foreground" />
                      <span className="text-xs text-foreground tracking-wide uppercase">
                        Processing
                      </span>
                    </div>
                  </div>
                )}

                {/* Starter questions */}
                {starterQuestions.length > 0 && !loading && (
                  <div className="flex flex-col gap-2 mt-2">
                    <p className="text-[10px] font-semibold tracking-widest text-foreground uppercase mb-1">
                      Suggested Questions
                    </p>
                    {starterQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-left px-4 py-3 text-sm transition-colors bg-background border border-border text-foreground hover:bg-muted"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={bottomRef} />
              </div>
            )}

            {/* ── Input bar ── */}
            {!minimized && (
              <div className="shrink-0 flex items-center gap-3 px-5 py-4 border-t border-border bg-background">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask a question..."
                  maxLength={2000}
                  disabled={loading}
                  data-testid="prophet-chat-input"
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-foreground text-foreground"
                />
                <Button
                  size="icon"
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  data-testid="prophet-chat-send"
                  className={`w-9 h-9 shrink-0 rounded-none transition-colors ${
                    input.trim()
                      ? "bg-foreground text-background hover:bg-muted-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
