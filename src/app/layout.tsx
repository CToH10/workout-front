import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApiProvider } from "@/context/apiContext";
import { Header } from "@/components/Header";
import { ToastContainerWrapper } from "@/components/ToastContainerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkoutManager",
  description: "A place to manage and improve your training sessions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ApiProvider>
          <Header />
          {children}
        </ApiProvider>
        <ToastContainerWrapper />
      </body>
    </html>
  );
}
