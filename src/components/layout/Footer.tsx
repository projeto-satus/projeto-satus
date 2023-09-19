import Image from "next/image";

export function Footer (){
    return (
		
<footer className="bg-white  shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center">
            <a href="#" className="">
                <img src="/logo-satus.png" className="h-12" alt="Projeto Satus" />
            </a>
        </div>
        <div className="mt-10 text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023 Projeto Satus™
        </div>
    </div>
</footer>


    )
}