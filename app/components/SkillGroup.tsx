import { stack } from "../utill/aboutInfo"
import { getImageUrl } from "../utill/skillIcons"

export default function SkillGroup() {
    return (
        <div id="skill" className="flex flex-wrap flex-col justify-center items-center bg-black w-fit mx-auto py-2 px-10 rounded-md gap-3">
          {
            Object.entries(stack).map(([category, items]) => (
              <Skill key={category} title={category}>
                <h1>{category}</h1>
                {items.map((item) => (
                  <img key={`${category}-${item}`} src={getImageUrl(item)} alt={item} />
                ))}
              </Skill>
            ))
          }
        </div>
    )
}

const Skill = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className="flex flex-wrap gap-3 text-white items-center">
            <span>{title}</span>
            {children}
        </div>
    )
}