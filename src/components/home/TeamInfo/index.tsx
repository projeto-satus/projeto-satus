import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
}

export function TeamInfo({ children }: Props) {
  return (
    <section
      id="team"
      className="m-6 flex flex-wrap justify-evenly rounded-md text-center md:shadow-sm md:p-12 md:text-left md:bg-blue-100 md:border-blue-200 md:border"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/R.1bae9d53fdecb6fa6464c173dc72691a?rik=hGVw%2bXE6KC%2bMcg&pid=ImgRaw&r=0')`,
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="w-full text-center mb-4 font-bold tracking-widest">
        <h2>
          Equipe<span className="text-[#ef484d]">.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {children}
      </div>
    </section>
  );
}
