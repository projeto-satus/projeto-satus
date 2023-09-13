import { Footer } from "./Footer";
import { Header } from "./Header";

export function BasePage (props:any){
    return (
        <>
            <Header />
            <div className="pt-20">{props.children}</div>
            <Footer />
        </>
    )
}