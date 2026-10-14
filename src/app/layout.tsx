import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Quà tặng 20/10", description: "Một lời chúc bí mật dành riêng cho bạn" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="vi"><body>{children}</body></html>; }
