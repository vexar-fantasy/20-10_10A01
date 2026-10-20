"use client";

import { AnimatePresence } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { CelebrationScreen } from "@/components/CelebrationScreen";
import { PasswordScreen } from "@/components/PasswordScreen";
import { ScratchCard } from "@/components/ScratchCard";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { deploymentRecipient, findRecipient } from "@/data/recipients";

type Step = "welcome" | "password" | "scratch" | "celebrate";
type Theme = "light" | "dark";
type ThemePreference = Theme | "system";

export default function Home() {
  const [step, setStep] = useState<Step>(deploymentRecipient ? "password" : "welcome");
  const [selectedId, setSelectedId] = useState(deploymentRecipient?.id ?? "");
  const [themePreference, setThemePreference] = useState<ThemePreference>("system");
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);
  const recipient = findRecipient(selectedId);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = window.localStorage.getItem("greeting-theme") as ThemePreference | null;
    setSystemPrefersDark(systemTheme.matches);
    setThemePreference(savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : "system");
    const followSystem = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };
    systemTheme.addEventListener("change", followSystem);
    return () => systemTheme.removeEventListener("change", followSystem);
  }, []);

  const selectTheme = (nextTheme: ThemePreference) => {
    setThemePreference(nextTheme);
    window.localStorage.setItem("greeting-theme", nextTheme);
  };
  const home = () => { setStep(deploymentRecipient ? "password" : "welcome"); setSelectedId(deploymentRecipient?.id ?? ""); };
  const activeTheme = themePreference === "system" ? (systemPrefersDark ? "dark" : "light") : themePreference;

  return <main data-theme={activeTheme}>
    <label className="theme-toggle">
      {themePreference === "system" ? <Monitor size={18} /> : themePreference === "light" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="sr-only">Chọn giao diện</span>
      <select value={themePreference} onChange={(event) => selectTheme(event.target.value as ThemePreference)} aria-label="Chọn giao diện">
        <option value="system">Theo thiết bị</option>
        <option value="light">Sáng</option>
        <option value="dark">Tối</option>
      </select>
    </label>
    <div className="background-decor" aria-hidden="true"><i>✦</i><i>♥</i><i>✿</i><i>✦</i><i>♥</i><i>✿</i></div>
    <AnimatePresence mode="wait">
      {step === "welcome" && <WelcomeScreen key="welcome" selectedId={selectedId} onSelect={setSelectedId} onContinue={() => setStep("password")} />}
      {step === "password" && recipient && <PasswordScreen key="password" recipient={recipient} onBack={() => setStep("welcome")} onSuccess={() => setStep("scratch")} />}
      {step === "scratch" && recipient && <ScratchCard key="scratch" recipient={recipient} onComplete={() => setStep("celebrate")} />}
      {step === "celebrate" && recipient && <CelebrationScreen key="celebrate" recipient={recipient} onHome={home} />}
    </AnimatePresence>
  </main>;
}
