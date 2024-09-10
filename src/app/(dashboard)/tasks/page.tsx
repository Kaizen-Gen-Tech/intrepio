import { columns } from "./columns";
import { DataTable } from "./data-table";
import { tasks } from "./tasks";

export default async function TaskPage() {
  return <DataTable data={tasks} columns={columns} />;
}
