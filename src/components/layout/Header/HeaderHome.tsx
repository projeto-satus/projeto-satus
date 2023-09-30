"use client";
import { useEffect, useState } from "react";
import { HeaderLink } from "./HeaderLink";

export function HeaderHome() {
  const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
      const onScroll = (e: Event) => {
        setActiveLinkOnScroll(window.scrollY);
      };

      const setActiveLinkOnScroll = (scrollTop: number) => {
        const home = document.getElementById("home");
        const team = document.getElementById("team");
        const projects = document.getElementById("projects");

        const scrollOffsetTop = scrollTop + 140;

        if (projects && scrollOffsetTop >= projects.offsetTop) {
          setActiveLink("projects");
        } else if (team && scrollOffsetTop >= team.offsetTop) {
          setActiveLink("team");
        } else if (home && scrollOffsetTop >= home.offsetTop) {
          setActiveLink("home");
        }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, [activeLink]);

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

                    <div className="flex md:order-2">
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="flex-shrink flex-grow-0 tracking-widest items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col items-stretch md:items-center gap-0 p-4 md:p-0 mt-4 font-medium text-lg border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <HeaderLink
                                    href="/#home"
                                    label="Início"
                                    active={activeLink === "home"}
                                />
                            </li>
                            <li>
                                <HeaderLink
                                    href="/#team"
                                    label="Equipe"
                                    active={activeLink === "team"}
                                />
                            </li>
                            <li>
                                <HeaderLink
                                    href="/#projects"
                                    label="Projetos"
                                    active={activeLink === "projects"}
                                />
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}