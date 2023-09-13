import Image from "next/image"
import HomeBannerImage from "./homebanner.jpg"

export function HomeBanner () {
    return (
        <div className="flex">
            <div className="flex-1 px-12 py-4">
                <h1>Projeto Satus</h1>
                <p className="text-slate-600">Somos a equipe Satus, um grupo de talentosos desenvolvedores de software altamente motivados e apaixonados por transformar ideias em soluções de software inovadoras. Com habilidades técnicas sólidas em linguagens de programação como Python, Java, JavaScript e experiência em desenvolvimento web, móvel e de aplicativos, somos a equipe ideal para impulsionar o sucesso do seu projeto. Além disso, nossa capacidade de colaboração é uma de nossas maiores forças, pois acreditamos que o trabalho em equipe é a chave para o sucesso em projetos de desenvolvimento de software complexos. Se você está em busca de uma equipe de desenvolvimento que entrega resultados excepcionais e está comprometida com a excelência técnica, estamos prontos para colaborar com você. Entre em contato conosco e vamos transformar sua visão em realidade. #DesenvolvedoresDeSoftware #Colaboração #Inovação #EquipeTécnica #TransformandoIdeias #SucessoNoDesenvolvimento.</p>
            </div>
            <div className="flex-1">
                <Image src={HomeBannerImage} alt="homebanner" />
            </div>
        </div>
    )
}