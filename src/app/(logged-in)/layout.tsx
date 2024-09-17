import { Sidebar } from "~/components/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-dvw">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {children}
    </div>
  );
}
