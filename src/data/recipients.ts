import type { Recipient } from "@/types/recipient";

// Chỉ cần sửa danh sách này để cá nhân hóa món quà cho từng người.
export const recipients: Recipient[] = [
  { id: "girl-1", name: "Nguyễn Văn A", password: "0101", greeting: "Chúc bạn luôn xinh đẹp, hạnh phúc và gặp thật nhiều may mắn! 💗" },
  { id: "girl-2", name: "Nguyễn Văn B", password: "0202", greeting: "Mong bạn luôn vui vẻ, tự tin và tỏa sáng theo cách riêng của mình! 🌷" },
  { id: "girl-3", name: "Nguyễn Văn C", password: "0303", greeting: "Chúc cô gái tuyệt vời này luôn mạnh mẽ, rạng rỡ và đạt được những điều mình mong muốn! ✨" }
];

export const findRecipient = (id: string) => recipients.find((recipient) => recipient.id === id);

/**
 * Each Vercel project supplies its own recipient at build time. This keeps the
 * four websites independent: a deployment only uses the values configured for it.
 * Leave these variables unset locally to keep the recipient-selection screen.
 */
const deploymentName = process.env.NEXT_PUBLIC_GREETING_NAME;
const deploymentPassword = process.env.NEXT_PUBLIC_GREETING_PASSWORD;
const deploymentGreeting = process.env.NEXT_PUBLIC_GREETING_MESSAGE;

export const deploymentRecipient = deploymentName && deploymentPassword && deploymentGreeting
  ? { id: "deployment-recipient", name: deploymentName, password: deploymentPassword, greeting: deploymentGreeting }
  : undefined;
