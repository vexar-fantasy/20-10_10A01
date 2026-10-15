"use client";

import { AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { CelebrationScreen } from "@/components/CelebrationScreen";
import { PasswordScreen } from "@/components/PasswordScreen";
import { ScratchCard } from "@/components/ScratchCard";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { findRecipient } from "@/data/recipients";

type Step = "welcome" | "password" | "scratch" | "celebrate";
type Theme = "light" | "dark";

export default function Home() {
  const [step, setStep] = useState<Step>("welcome");
  const [selectedId, setSelectedId] = useState("");
  const [theme, setTheme] = useState<Theme>("light");
  const recipient = findRecipient(selectedId);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = window.localStorage.getItem("greeting-theme") as Theme | null;
    setTheme(savedTheme ?? (systemTheme.matches ? "dark" : "light"));
    const followSystem = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem("greeting-theme")) setTheme(event.matches ? "dark" : "light");
    };
    systemTheme.addEventListener("change", followSystem);
    return () => systemTheme.removeEventListener("change", followSystem);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem("greeting-theme", nextTheme);
  };
  const home = () => { setStep("welcome"); setSelectedId(""); };

  return <main data-theme={theme}>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "light" ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng"} title={theme === "light" ? "Giao diện tối" : "Giao diện sáng"}>
      {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}<span>{theme === "light" ? "Tối" : "Sáng"}</span>
    </button>
    <div className="background-decor" aria-hidden="true"><i>✦</i><i>♥</i><i>✿</i><i>✦</i><i>♥</i><i>✿</i></div>
    <AnimatePresence mode="wait">
      {step === "welcome" && <WelcomeScreen key="welcome" selectedId={selectedId} onSelect={setSelectedId} onContinue={() => setStep("password")} />}
      {step === "password" && recipient && <PasswordScreen key="password" recipient={recipient} onBack={() => setStep("welcome")} onSuccess={() => setStep("scratch")} />}
      {step === "scratch" && recipient && <ScratchCard key="scratch" recipient={recipient} onComplete={() => setStep("celebrate")} />}
      {step === "celebrate" && recipient && <CelebrationScreen key="celebrate" recipient={recipient} onHome={home} />}
    </AnimatePresence>
  </main>;
}
