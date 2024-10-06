import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gradient-to-br from-slate-200 to-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl bg-slate-50 min-h-screen">
        <Header />
        <div className="mx-auto px-6 py-24 sm:py-32 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
