import { Sidebar } from "~/components/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh w-dvw">
      <div className="flex size-full">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {children}
      </div>
    </div>
  );
}
