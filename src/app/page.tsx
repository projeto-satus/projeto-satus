import { HomeBanner } from "@/components/home/HomeBanner";
import { TeamInfo } from "@/components/home/TeamInfo";
import { TeamMember } from "@/components/home/TeamInfo/TeamMember";
import { BasePage } from "@/components/layout/BasePage";
import { Logo } from "@/components/layout/Logo";

export default function Home() {
  return (
    <BasePage>
      <HomeBanner />
      <TeamInfo>
        <TeamMember
          image="/gio.png"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
          name="Giovanne Afonso"
          role="Software Engineer"
          githubUrl=""
          linkedinUrl=""
          websiteUrl=""
        />
        <TeamMember
          image="/matheus.jpg"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
          name="Matheus Torres"
          role="Software Engineer"
          githubUrl=""
          linkedinUrl=""
          websiteUrl=""
        />
        <TeamMember
          image="/sebastiao.jpg"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
          name="Sebastião"
          role="Software Engineer"
          githubUrl=""
          linkedinUrl=""
          websiteUrl=""
        />
        <TeamMember
          image="/anderson.png"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
          name="Anderson Soares"
          role="Software Engineer"
          githubUrl=""
          linkedinUrl=""
          websiteUrl=""
        />
        <TeamMember
          image="/fabiele.jpg"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
          name="Fabiele"
          role="Software Engineer"
          githubUrl=""
          linkedinUrl=""
          websiteUrl=""
        />
        <TeamMember
          image="/jhon.jpg"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
          name="John Torres"
          role="Software Engineer"
          githubUrl=""
          linkedinUrl=""
          websiteUrl=""
        />
      </TeamInfo>
    </BasePage>
  );
}
