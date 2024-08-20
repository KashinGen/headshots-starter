import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import StripePricingTable from "@/components/stripe/StripeTable";
import { createClient } from "@/lib/supabase/server";
import PriceTable from "@/components/priceTable/price";

export const dynamic = "force-dynamic";

export default async function Index() {

  // const supabase = createClient()

  // const { data: { user }, error } = await supabase.auth.getUser()
  // if (user) {
  //   return redirect("/overview");
  // }

  // if (!user) {
  //   return redirect("/login");
  // }

  return (
    // <StripePricingTable user={user} />
    <PriceTable/>
  );
}
