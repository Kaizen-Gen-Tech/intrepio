import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getData } from "./actions";

export const metadata = {
  title: "Data",
};

export default async function Page() {
  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}
