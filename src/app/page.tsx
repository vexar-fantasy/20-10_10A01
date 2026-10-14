"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CelebrationScreen } from "@/components/CelebrationScreen";
import { PasswordScreen } from "@/components/PasswordScreen";
import { ScratchCard } from "@/components/ScratchCard";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { findRecipient } from "@/data/recipients";

type Step = "welcome" | "password" | "scratch" | "celebrate";
export default function Home() { const [step, setStep] = useState<Step>("welcome"); const [selectedId, setSelectedId] = useState(""); const recipient = findRecipient(selectedId); const home = () => { setStep("welcome"); setSelectedId(""); }; return <main><div className="background-decor" aria-hidden="true"><i>✦</i><i>♥</i><i>✿</i><i>✦</i><i>♥</i><i>✿</i></div><AnimatePresence mode="wait">{step === "welcome" && <WelcomeScreen key="welcome" selectedId={selectedId} onSelect={setSelectedId} onContinue={() => setStep("password")} />}{step === "password" && recipient && <PasswordScreen key="password" recipient={recipient} onBack={() => setStep("welcome")} onSuccess={() => setStep("scratch")} />}{step === "scratch" && recipient && <ScratchCard key="scratch" recipient={recipient} onComplete={() => setStep("celebrate")} />}{step === "celebrate" && recipient && <CelebrationScreen key="celebrate" recipient={recipient} onHome={home} />}</AnimatePresence></main>; }
