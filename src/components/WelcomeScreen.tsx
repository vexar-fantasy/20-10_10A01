"use client";

import { motion } from "framer-motion";
import { ChevronDown, Gift, Sparkles } from "lucide-react";
import { recipients } from "@/data/recipients";

export function WelcomeScreen({ selectedId, onSelect, onContinue }: { selectedId: string; onSelect: (id: string) => void; onContinue: () => void }) {
  return <motion.section className="panel welcome" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}>
    <div className="mini-icon"><Gift size={25} /></div>
    <p className="eyebrow">20 • 10 • 2026</p>
    <h1>Happy Vietnamese<br /><em>Women&apos;s Day!</em></h1>
    <p className="vietnamese-title">Chúc mừng ngày Phụ nữ Việt Nam 20/10</p>
    <p className="intro">Một món quà nhỏ dành riêng cho bạn. Hãy chọn tên và khám phá điều bất ngờ nhé!</p>
    <label className="select-label" htmlFor="recipient">Bạn là ai nhỉ?</label>
    <div className="select-wrap"><select id="recipient" value={selectedId} onChange={(event) => onSelect(event.target.value)} aria-label="Chọn tên của bạn"><option value="">Chọn tên của bạn</option>{recipients.map((person) => <option value={person.id} key={person.id}>{person.name}</option>)}</select><ChevronDown size={19} aria-hidden="true" /></div>
    <button className="primary-button" type="button" onClick={onContinue} disabled={!selectedId}><Sparkles size={19} /> Khám phá lời chúc <span>✨</span></button>
    <p className="hint">Một điều dịu dàng đang chờ bạn mở ra</p>
  </motion.section>;
}
