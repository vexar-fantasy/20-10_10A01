"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Heart, Home, Sparkles } from "lucide-react";
import { useEffect } from "react";
import type { Recipient } from "@/types/recipient";

const burst = () => confetti({ particleCount: 120, spread: 90, startVelocity: 35, origin: { y: .62 }, colors: ["#f278a7", "#f9ca67", "#b99be5", "#ffffff", "#87d7c2"], shapes: ["circle", "square"] });
export function CelebrationScreen({ recipient, onHome }: { recipient: Recipient; onHome: () => void }) { useEffect(() => { burst(); const id = window.setTimeout(() => confetti({ particleCount: 45, spread: 120, origin: { y: .75 } }), 550); return () => window.clearTimeout(id); }, []); return <motion.section className="panel celebration" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }}><div className="celebration-flowers" aria-hidden="true">🌸　🎈　🌷　💖　🌼</div><div className="mini-icon"><Heart size={25} fill="currentColor" /></div><p className="eyebrow">MÓN QUÀ ĐÃ ĐƯỢC MỞ</p><h1>Happy Women&apos;s<br /><em>Day! 🎉</em></h1><p className="celebrate-copy">Chúc <strong>{recipient.name}</strong> có một ngày 20/10 thật tuyệt vời!</p><p className="signature">Mong mọi điều dễ thương nhất sẽ tìm đến bạn hôm nay và mỗi ngày sau đó.</p><button className="primary-button" type="button" onClick={burst}><Sparkles size={19} /> Nhận thêm yêu thương <span>💖</span></button><button className="secondary-button" type="button" onClick={onHome}><Home size={18} /> Quay lại trang chủ</button></motion.section>; }
