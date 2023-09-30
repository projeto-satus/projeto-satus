"use server";
import { useServerMember } from "@/hooks/useServerMember";
import { HeaderLink } from "./HeaderLink";

export async function HeaderDashboard() {
  const { member } = useServerMember();

  return (
    <nav
      className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      style={{
        backgroundImage: 'linear-gradient(#fff8, #fff)',
        backdropFilter: 'blur(3px)',
      }}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="/logo-satus.png" className="h-14 mr-3" alt="Logo" />
        </a>
        <div className="flex-1"></div>
        <div
          className="flex-shrink flex-grow-0 tracking-widest items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-stretch md:items-center gap-0 p-4 md:p-0 mt-4 font-medium text-lg border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!!member && (
              <li>
                <a
                  href="/api/signout"
                  className={`block py-2 px-4 rounded-md text-white bg-[#ef484d] hover:bg-red-800`}
                  aria-current="page"
                >
                  Sair
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}