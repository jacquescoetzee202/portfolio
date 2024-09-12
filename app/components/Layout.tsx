import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8">
        <div>{children}</div>
      </div>
    </>
  );
}
