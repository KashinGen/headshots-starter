import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "../../types/supabase";
import { Login } from "./components/Login";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createClient()

  const { data: { user }, error } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  const headersList = headers();
  const host = headersList.get("host");

  return (
    <div className="flex flex-col flex-1 w-full h-[calc(100vh-73px)]">
      <Login host={host} searchParams={searchParams} />
    </div>
  );
}
