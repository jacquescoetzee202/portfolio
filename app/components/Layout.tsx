import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gradient-to-br from-slate-200 to-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl bg-slate-50 min-h-screen">
        <Header />
        <div className="mx-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
