import { columns } from "./columns";
import { DataTable } from "./data-table";
import { tasks } from "./data";

export default async function TaskPage() {
  return <DataTable columns={columns} data={tasks} />;
}
