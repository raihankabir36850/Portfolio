import { skillsData } from "@/public/data/skillsData";
import Paragraph from "@/src/components/ui/Paragraph";
import Skills from "@/src/components/ui/Skills";
import Title from "@/src/components/ui/Title";

const para = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

export default function ProjectsPage() {
    return (
      <div className="">
        <Title text="About me"/>
        <Paragraph text={para}/>
        <Title text="My Skills"/>
        <Skills data={skillsData}/>
      </div>
    )
  }