import { Footer } from "@/shared/components/footer";
import { Navbar } from "@/shared/components/navbar";

export default function FindUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar variant="light" />
      {children}
      <Footer />
    </div>
  );
}
