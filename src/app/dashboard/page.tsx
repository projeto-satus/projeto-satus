import { useServerMember } from "@/hooks/useServerMember";
import { GuestPage } from "./GuestPage";
import { DashboardContentPage } from "./DashboardContentPage";
import { BasePage } from "@/components/layout/BasePage";

export default function DashboardPage() {
  const { member } = useServerMember();

  return <BasePage>
    {member ? <DashboardContentPage /> : <GuestPage />}
  </BasePage>
}
