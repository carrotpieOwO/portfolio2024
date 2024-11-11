import { stack } from "../utill/aboutInfo"
import { getImageUrl } from "../utill/skillIcons"

export default function SkillGroup() {
    return (
        <div id="skill" className="flex flex-wrap flex-col justify-center items-center bg-black w-fit mx-auto py-5 px-5 rounded-[20px] gap-3 z-10 relative">
          {
            Object.entries(stack).map(([category, items]) => (
              <Skill key={category} title={category}>
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
            <span className="font-bold">{title}</span>
            <div className="flex flex-wrap gap-2">
              {children}
            </div>
        </div>
    )
}