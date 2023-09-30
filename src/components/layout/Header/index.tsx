"use server";
import { HeaderDashboard } from "./HeaderDashboard";
import { HeaderHome } from "./HeaderHome";

interface Props {
  home?: boolean;
  dashboard?: boolean;
}

export async function Header({ home, dashboard }: Props) {

  if (home) return <HeaderHome />;
  if (dashboard) return <HeaderDashboard />;

  return <HeaderDashboard />;
}
