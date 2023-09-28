import { Footer } from "../Footer";
import { Header } from "../Header";
import { InitFlowbite } from "./InitFlowbite";

export function BasePage(props: any) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://th.bing.com/th/id/R.32456468be9a9d36efff0deea92b6fec?rik=yeLqDykZd5zOXw&pid=ImgRaw&r=0')`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundColor: '#e0efff',
          backgroundBlendMode: 'color-burn',
          opacity: 1,
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '90vh',
          zIndex: -2,
        }}
      >&nbsp;</div>
      <div
        style={{
          backgroundImage: 'linear-gradient(#fff0, #fff)',
          backgroundSize: '100% 90vh',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '90vh',
          opacity: 1,
          zIndex: -1,
        }}
      >&nbsp;</div>
      <InitFlowbite />
      <Header />
      <div
        className="pt-20"
      >{props.children}</div>
      <Footer />
    </>
  );
}
