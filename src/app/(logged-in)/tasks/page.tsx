import { columns } from "./columns";
import { DataTable } from "./data-table";

import { tasks } from "~/server/db/tasks";

export const metadata = {
  title: "Tasks",
};

export default async function Page() {
  return <DataTable columns={columns} data={tasks} />;
}
