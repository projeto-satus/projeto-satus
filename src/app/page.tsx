import { HomeBanner } from "@/components/HomeBanner"
import { TeamInfo } from "@/components/TeamInfo"
import { BasePage } from "@/components/layout/BasePage"
import { Logo } from "@/components/layout/Logo"

export default function Home() {
  return (
      <BasePage >
        <HomeBanner />
        <TeamInfo />
      </BasePage>
  )
}
