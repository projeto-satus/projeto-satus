import Image from "next/image"
import HomeBannerImage from "./homebanner.jpg"

export function HomeBanner () {
    return (
        <div className="flex m-6">
            <div className="flex-1 p-8">
                <h1 className="mb-4 tracking-widest">Projeto Satus</h1>
                <p className="text-slate-600 tracking-widest mr-10">Somos a equipe Satus, desenvolvedores de software apaixonados e experientes. Com proficiência em Python, Java, JavaScript e expertise em desenvolvimento web e móvel, transformamos ideias em soluções inovadoras. Acreditamos na colaboração como chave para o sucesso em projetos complexos. Se busca excelência técnica e resultados excepcionais, estamos prontos para colaborar. Transforme sua visão em realidade conosco. </p>
            </div>
            <div className="flex-1">
                <Image className="rounded-xl" src={HomeBannerImage} alt="homebanner" />
            </div>
        </div>
    )
}