import Image from "next/image";
import HomeBannerImage from "./homebanner.jpg";

export function HomeBanner() {
  return (
    <div
      id="home"
      className="flex flex-col lg:text-lg text-base lg:flex-row m-6 items-center pb-6"
    >
      <div className="flex-1 lg:pr-8 pb-8 text-justify lg:text-left">
        <h1 className="md:mb-6 mb-4 tracking-wide leading-snug xl:text-6xl xl:mb-10">Projeto Satus</h1>
        <p className="text-slate-600 tracking-widest">
          Somos a equipe Satus, desenvolvedores de software apaixonados e
          experientes. Com proficiência em Python, Java, JavaScript e expertise
          em desenvolvimento web e móvel, transformamos ideias em soluções
          inovadoras. Acreditamos na colaboração como chave para o sucesso em
          projetos complexos. Se busca excelência técnica e resultados
          excepcionais, estamos prontos para colaborar. Transforme sua visão em
          realidade conosco.
        </p>
      </div>
      <div className="flex-1">
        <Image className="rounded-xl" src={HomeBannerImage} alt="homebanner" />
      </div>
    </div>
  );
}
