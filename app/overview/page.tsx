import ClientSideModelsList from "@/components/realtime/ClientSideModelsList";
import { createClient } from "@/lib/supabase/server";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return <div>User not found</div>;
  }

  const { data: models } = await supabase
    .from("models")
    .select(
      `*, samples (
      *
    )`
    )
    .eq("user_id", user.id);

  return <ClientSideModelsList serverModels={models ?? []} />;
}
