import { PageWithHeader } from "~/components/page-with-header";

export default async function Page() {
  return (
    <PageWithHeader
      headerChildren={<h1 className="text-2xl font-semibold">Intrepio</h1>}
    >
      <main className="p-4">Default Page</main>
    </PageWithHeader>
  );
}
