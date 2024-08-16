interface SkillElement {
    id: string;
    text: string;
    icon: string; 
  }

interface ComponentProps {
    data: SkillElement[];
}

const Skills:React.FC<ComponentProps> =({data})=>{
    return (
        <ul>
            {data.map((item) => {
                return <li key={item.id}>
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                    <span>{item.text}</span>
                </li>
            })}
        </ul>
    )
};

export default Skills;