import { Footer } from "../Footer";
import { Header } from "../Header";
import { InitFlowbite } from "./InitFlowbite";

export function BasePage(props: any) {
  return (
    <>
      <InitFlowbite />
      <Header />
      <div className="pt-20">{props.children}</div>
      <Footer />
    </>
  );
}
