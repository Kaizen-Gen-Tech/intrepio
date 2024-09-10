import { cookies } from "next/headers";

import { Mail } from "./mail";
import { mails } from "./data";

export default async function Page() {
  const layout = cookies().get("react-resizable-panels:layout:mail");

  const defaultLayout = layout
    ? (JSON.parse(layout.value) as number[])
    : undefined;

  return <Mail mails={mails} defaultLayout={defaultLayout} />;
}
