import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gradient-to-br from-slate-200 to-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl bg-slate-50 min-h-screen">
        <Header />
        <div className="container mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
