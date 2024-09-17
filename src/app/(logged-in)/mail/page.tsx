import { cookies } from "next/headers";

import { Mail } from "./mail";

export default async function Page() {
  const layout = cookies().get("react-resizable-panels:layout:mail");

  const defaultLayout = layout
    ? (JSON.parse(layout.value) as [number, number])
    : undefined;

  return <Mail defaultLayout={defaultLayout} />;
}
