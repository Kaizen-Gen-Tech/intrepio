import { PageWithHeader } from "~/components/page-with-header";

export default async function Page() {
  return (
    <PageWithHeader
      headerChildren={<h1 className="text-2xl font-semibold">INT.REP.IO</h1>}
    >
      <div className="p-4">Default Page</div>
    </PageWithHeader>
  );
}
