import { useState } from "react";
import { useLocation, useSearch } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { getApiErrorMessage } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const { login, register, user } = useAuth();
  const [, navigate] = useLocation();
  const search = useSearch();
  const { toast } = useToast();

  const redirectTo = (() => {
    try {
      const params = new URLSearchParams(search);
      const r = params.get("redirect");
      if (
        r &&
        r.startsWith("/") &&
        !r.startsWith("//") &&
        !r.includes("\\") &&
        !r.includes("\n") &&
        !r.includes("\r") &&
        !/^\/[^/].*:/.test(r)
      ) {
        return r;
      }
    } catch { /* ignore */ }
    return "/blog";
  })();

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  if (user) {
    navigate(redirectTo);
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(loginForm.username, loginForm.password);
      navigate(redirectTo);
    } catch (err: any) {
      toast({ title: "Login failed", description: getApiErrorMessage(err, "Invalid username or password. Please try again."), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      setPasswordMismatch(true);
      toast({ title: "Passwords do not match", description: "Please make sure both password fields match.", variant: "destructive" });
      return;
    }
    setPasswordMismatch(false);
    setLoading(true);
    try {
      await register(registerForm.username, registerForm.email, registerForm.password);
      navigate(redirectTo);
    } catch (err: any) {
      toast({ title: "Registration failed", description: getApiErrorMessage(err, "Could not create your account. Please try again."), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground relative overflow-hidden">
      {/* Divider */}
      <div className="hidden lg:block w-px bg-border absolute left-1/2 top-0 bottom-0" />

      {/* Left panel — Title */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center px-12 relative z-10">
        <div className="max-w-md text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            ARCOLYTE TECHNOLOGIES
          </h1>
          <p className="text-foreground text-lg font-medium">
            Future Digital Solutions
          </p>
        </div>
      </div>

      {/* Right panel — auth form */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10 bg-muted/30">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">ARCOLYTE TECHNOLOGIES</h1>
          </div>

          <div className="bg-background border border-border p-8 shadow-sm">
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted rounded-none p-1">
                <TabsTrigger
                  value="login"
                  className="rounded-none text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="rounded-none text-sm font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  Register
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="login-username"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Username or Email
                    </Label>
                    <Input
                      id="login-username"
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                      required
                      className="h-11 rounded-none border-border bg-background text-foreground"
                      placeholder="your_username or you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="login-password"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required
                        className="h-11 rounded-none border-border bg-background text-foreground pr-10"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground hover:text-foreground transition-colors"
                        aria-label={showLoginPassword ? "Hide password" : "Show password"}
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 rounded-none font-semibold transition-colors mt-4"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
                  </Button>
                  <div className="text-center mt-4">
                    <a
                      href="/forgot-password"
                      className="text-foreground hover:text-foreground text-sm font-medium transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="reg-username"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Username
                    </Label>
                    <Input
                      id="reg-username"
                      type="text"
                      value={registerForm.username}
                      onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                      required
                      className="h-11 rounded-none border-border bg-background text-foreground"
                      placeholder="your_username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="reg-email"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Email
                    </Label>
                    <Input
                      id="reg-email"
                      type="email"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      required
                      className="h-11 rounded-none border-border bg-background text-foreground"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="reg-password"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="reg-password"
                        type={showRegPassword ? "text" : "password"}
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        required
                        minLength={6}
                        className="h-11 rounded-none border-border bg-background text-foreground pr-10"
                        placeholder="Min 6 characters"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground hover:text-foreground transition-colors"
                        aria-label={showRegPassword ? "Hide password" : "Show password"}
                      >
                        {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="reg-confirm-password"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="reg-confirm-password"
                        type={showRegConfirmPassword ? "text" : "password"}
                        value={registerForm.confirmPassword}
                        onChange={(e) => {
                          setRegisterForm({ ...registerForm, confirmPassword: e.target.value });
                          setPasswordMismatch(false);
                        }}
                        required
                        minLength={6}
                        className={`h-11 rounded-none border-border bg-background text-foreground pr-10 ${passwordMismatch ? "border-red-500" : ""}`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegConfirmPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground hover:text-foreground transition-colors"
                        aria-label={showRegConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showRegConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {passwordMismatch && (
                      <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 rounded-none font-semibold transition-colors mt-4"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          <p className="text-center text-foreground text-xs mt-6 tracking-widest uppercase">
            ARCOLYTE TECHNOLOGIES · Secure · Future · Innovative
          </p>
        </div>
      </div>
    </div>
  );
}
