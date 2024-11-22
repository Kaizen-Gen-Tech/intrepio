import { MySidebar } from "~/components/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-dvw overflow-hidden">
      <MySidebar />
      {children}
    </div>
  );
}
