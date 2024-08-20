import { createClient } from "@/lib/supabase/server";
import Login from "../login/page";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user) {
    return <Login />;
  }

  return <div className="flex w-full flex-col px-4 lg:px-40">{children}</div>;
}
