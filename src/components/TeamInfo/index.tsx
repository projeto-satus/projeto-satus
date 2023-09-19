import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
}

export function TeamInfo({ children }: Props) {
  return (
    <section className="m-6 flex flex-wrap justify-evenly rounded-md text-center md:shadow-sm md:p-12 md:text-left md:bg-slate-100">
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
