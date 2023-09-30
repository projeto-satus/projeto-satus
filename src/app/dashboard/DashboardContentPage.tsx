import { BasePage } from "@/components/layout/BasePage";
import { useServerMember } from "@/hooks/useServerMember";

export function DashboardContentPage() {
  const { member } = useServerMember();

  if (!member) {
    return <></>;
  }
  
  return (
    <pre>{JSON.stringify(member, null, 4)}</pre>
  )
}