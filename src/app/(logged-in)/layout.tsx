import { AppSidebar } from "~/components/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-dvw overflow-hidden">
      <AppSidebar />
      {children}
    </div>
  );
}
