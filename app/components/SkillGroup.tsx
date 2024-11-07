export default function SkillGroup() {
    return (
        <div id="skill" className="flex flex-wrap flex-col justify-center items-center bg-black w-fit mx-auto py-2 px-10 rounded-md gap-3">
          <Skill title="Language">
            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&amp;logo=Javascript&amp;logoColor=black" alt="Javascript" />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&amp;logo=TypeScript&amp;logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/jquery-0769AD?style=flat&amp;logo=jquery&amp;logoColor=white" alt="Chart.js" />
          </Skill>
          <Skill title="Front-End">
            <img src="https://img.shields.io/badge/Next.js-000000?style=flat&amp;logo=next.js&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&amp;logo=React&amp;logoColor=black" alt="React" />
            <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&amp;logo=ReactQuery&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/angularJS-DD0031?style=flat&amp;logo=angular&amp;logoColor=white" alt="angularJS" />
          </Skill>
          <Skill title="Library">
            <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat&amp;logo=Chart.js&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/recharts-f67377?style=flat&amp;logo=recharts.js&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/D3-F9A03C?style=flat&amp;logo=d3.js&amp;logoColor=white" alt="Chart.js" />
          </Skill>
          <Skill title="Styling">
            <img src="https://img.shields.io/badge/styled component-DB7093?style=flat&amp;logo=styledcomponents&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&amp;logo=tailwindcss&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/emotion-f67377?style=flat&amp;logo=emotion&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&amp;logo=mui&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat&amp;logo=antdesign&amp;logoColor=white" alt="Chart.js" />
          </Skill>
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