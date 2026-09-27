import { useState } from "react";
import { Brain, CheckCircle, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

const questions = [
  {
    id: 1,
    question: "How do you currently handle lead management?",
    options: [
      { text: "Spreadsheets / manual tracking", score: 1 },
      { text: "Basic CRM (e.g., HubSpot free)", score: 2 },
      { text: "Automated pipelines with workflows", score: 3 },
      { text: "AI-powered smart routing & scoring", score: 4 },
    ],
  },
  {
    id: 2,
    question: "What best describes your content production process?",
    options: [
      { text: "I write everything manually", score: 1 },
      { text: "I use templates but still mostly manual", score: 2 },
      { text: "I use AI tools for drafts", score: 3 },
      { text: "Fully automated multi-channel distribution", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How does your team handle customer support?",
    options: [
      { text: "Manual responses only", score: 1 },
      { text: "FAQ page + email", score: 2 },
      { text: "Chatbot with basic rules", score: 3 },
      { text: "AI assistant handling 80%+ of queries", score: 4 },
    ],
  },
  {
    id: 4,
    question: "How often do you analyze business data?",
    options: [
      { text: "Rarely / when there's a problem", score: 1 },
      { text: "Monthly reports", score: 2 },
      { text: "Weekly dashboards", score: 3 },
      { text: "Real-time analytics with alerts", score: 4 },
    ],
  },
];

const levels = [
  { min: 4, max: 6, title: "Digital Beginner", desc: "You're at the starting line, great news! There's enormous untapped potential in your business. ARCOLYTE TECHNOLOGIES can automate your core workflows and rapidly modernize your operations.", recommendation: "Start with Automation Systems" },
  { min: 7, max: 10, title: "Growing Digital", desc: "You've started your digital journey but there are clear gaps. With the right AI integrations and smarter tooling, you could 3x your output without adding headcount.", recommendation: "Explore AI Integrations + Digital Marketing" },
  { min: 11, max: 13, title: "Tech-Forward", desc: "You're ahead of most businesses! Now it's about optimizing, scaling, and turning your digital capabilities into a competitive moat.", recommendation: "Level up with Strategic Consulting" },
  { min: 14, max: 16, title: "Digital Leader", desc: "You're operating at an elite level. ARCOLYTE TECHNOLOGIES can partner with you on advanced AI systems, corporate training programs, and expansion consulting.", recommendation: "Partner with us on Enterprise Solutions" },
];

export default function SkillsQuizSection() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);
  const { user } = useAuth();

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const level = levels.find(l => totalScore >= l.min && totalScore <= l.max) || levels[0];
  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (qId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [qId]: score }));
    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(c => c + 1), 300);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setSubmitted(true);
      if (user) {
        fetch("/api/profile/feature-result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ feature: "skills-quiz", score: totalScore, level: level.title }),
        }).catch((err) => console.warn("[SkillsQuiz] Could not save result to profile:", err));
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrent(0);
  };

  return (
    <section id="skills-quiz" className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <Brain className="w-4 h-4" /> Feature 3 of 12
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            Digital Skills Assessment
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Answer 4 quick questions to benchmark your business's digital maturity and get a personalised roadmap.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div className="p-8 border border-border bg-card">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                  <span>Question {Math.min(current + 1, questions.length)} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="h-1 bg-muted w-full">
                  <div
                    className="h-full bg-foreground transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="font-bold text-xl text-foreground mb-6 leading-tight">
                  {questions[current].question}
                </h3>
                <div className="space-y-4">
                  {questions[current].options.map((opt) => {
                    const selected = answers[questions[current].id] === opt.score;
                    return (
                      <button
                        key={opt.text}
                        onClick={() => handleAnswer(questions[current].id, opt.score)}
                        className={`w-full text-left p-5 border transition-colors duration-200 text-sm font-semibold rounded-none flex items-center gap-4 ${
                          selected
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-foreground hover:bg-muted"
                        }`}
                      >
                        {selected ? (
                          <CheckCircle className="w-5 h-5 text-background flex-shrink-0" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-foreground flex-shrink-0" />
                        )}
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 justify-between items-center mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={() => setCurrent(c => Math.max(0, c - 1))}
                  disabled={current === 0}
                  className="text-foreground font-bold text-xs uppercase tracking-wider rounded-none"
                >
                  Back
                </Button>
                <div>
                  {current < questions.length - 1 ? (
                    <Button
                      onClick={() => setCurrent(c => c + 1)}
                      disabled={!answers[questions[current].id]}
                      className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider rounded-none px-6"
                    >
                      Next <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={Object.keys(answers).length < questions.length}
                      className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider rounded-none px-8"
                    >
                      Get My Results
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-10 border border-foreground bg-foreground text-background text-center">
              <div className="w-20 h-20 bg-background flex items-center justify-center mx-auto mb-6 rounded-none">
                <Brain className="w-10 h-10 text-foreground" />
              </div>
              <p className="text-background text-sm font-bold uppercase tracking-wider mb-2">Your Digital Maturity Level</p>
              <h3 className="font-black text-4xl text-background mb-4 uppercase">{level.title}</h3>
              
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-12 transition-colors ${i < levels.indexOf(level) + 1 ? "bg-background" : "bg-background/20"}`}
                  />
                ))}
              </div>
              
              <p className="text-background text-base leading-relaxed max-w-lg mx-auto mb-10 font-medium">
                {level.desc}
              </p>

              <div className="p-6 border border-background bg-background/10 mb-10 text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-background mb-2">Recommended Next Step</p>
                <p className="text-background font-black text-lg break-words uppercase">{level.recommendation}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="bg-transparent text-background border-background hover:bg-background hover:text-foreground font-bold text-xs uppercase tracking-wider rounded-none px-6 py-6"
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Retake Quiz
                </Button>
                <Button
                  onClick={() => window.location.href = "/contact"}
                  className="bg-background text-foreground hover:bg-muted font-bold text-xs uppercase tracking-wider rounded-none px-8 py-6"
                >
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
