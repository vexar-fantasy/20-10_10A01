"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, KeyRound, Sparkles } from "lucide-react";
import type { Recipient } from "@/types/recipient";

export function PasswordScreen({ recipient, onBack, onSuccess }: { recipient: Recipient; onBack: () => void; onSuccess: () => void }) {
  const [password, setPassword] = useState(""); const [visible, setVisible] = useState(false); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); if (busy) return; setBusy(true); if (password === recipient.password) { setTimeout(onSuccess, 400); return; } setTimeout(() => { setError("Hmm, mật mã chưa đúng rồi! Thử lại nhé 💗"); setBusy(false); }, 350); };
  return <motion.section className="panel password-panel" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
    <button className="back-button" onClick={onBack} type="button"><ArrowLeft size={18} /> Quay lại</button><div className="mini-icon"><KeyRound size={25} /></div>
    <p className="eyebrow">MỘT CHÚT BÍ MẬT</p><h2>Xin chào, <em>{recipient.name}</em>!</h2><p className="intro">Nhập mật mã gồm 4 chữ số để mở món quà dành riêng cho bạn nhé.</p>
    <form onSubmit={submit}><label className="select-label" htmlFor="password">Mật mã của bạn</label><div className="password-wrap"><input id="password" inputMode="numeric" pattern="[0-9]*" maxLength={4} autoComplete="one-time-code" type={visible ? "text" : "password"} value={password} onChange={(event) => { setPassword(event.target.value.replace(/\D/g, "")); setError(""); }} placeholder="• • • •" aria-invalid={Boolean(error)} /><button type="button" onClick={() => setVisible(!visible)} aria-label={visible ? "Ẩn mật mã" : "Hiện mật mã"}>{visible ? <EyeOff size={19} /> : <Eye size={19} />}</button></div>{error && <p className="error" role="alert">{error}</p>}<button className="primary-button" type="submit" disabled={password.length !== 4 || busy}>{busy ? "Đang kiểm tra..." : <><Sparkles size={19} /> Mở món quà</>}</button></form><p className="hint">Gợi ý: ngày sinh của bạn đó ✨</p>
  </motion.section>;
}
