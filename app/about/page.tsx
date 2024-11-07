'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { aboutInfo } from "../utill/aboutInfo";

export default function About() {
  const [character, setCharacter] = useState('default');
  const titleRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = titleRef.current;
    const typing = typingRef.current;

    gsap.fromTo(title,
      { y: 100 },
      {
        y: 0,
        scrollTrigger: {
          trigger: title,
          start: "top bottom", // 요소의 top이 viewport의 bottom에 도달했을 때 시작
          end: "bottom top", // 요소의 bottom이 viewport의 top에 도달했을 때 끝
          toggleActions: "play none none reverse", // 진입 시 재생, 퇴장 시 역재생
          scrub: true, // 스크롤과 애니메이션을 연동하려면 이 옵션을 사용
        }
      }
    );

    gsap.fromTo(typing,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        fontSize: '2rem',
        duration: 2,
        scrollTrigger: {
          trigger: typing,
          start: "top bottom", // 요소의 top이 viewport의 bottom에 도달했을 때 시작
          end: "bottom top", // 요소의 bottom이 viewport의 top에 도달했을 때 끝
          toggleActions: "play none none", // 진입 시 재생, 퇴장 시 역재생
          //scrub: true, // 스크롤과 애니메이션을 연동하려면 이 옵션을 사용
        }
      }
    );

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: section,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //   }
    // })
    // .fromTo(section, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative h-[100vh] w-full">
      <div ref={titleRef} className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl xl:text-7xl font-bold">
        FRONT-END DEVELOPER
      </div>
      <div className="about-container w-full h-full absolute top-10 left-1/2 transform -translate-x-1/2 bg-white py-10">
        <div ref={typingRef}>
          <div className="flex justify-center items-center">
              안녕하세요!&nbsp;
              <div className="shake">
                👋🏻
              </div> 
          </div>
          <span>저는&nbsp;</span>
          <TypeAnimation
              style={{color:'#EF629F'}}
              sequence={[
                  '노력하는 개발자',
                  1500,
                  'Front End 개발자',
                  1500,
                  '사용자경험을 중요시하는',
                  1500,
                  '고민하는 개발자',
                  1500,
                  '고양이를 키우는',
                  1500,
                  '키보드를 좋아하는',
                  1500,
                  'INTP',
                  1500,
              ]}
              repeat={Infinity}
          />
          <span>&nbsp;최하영입니다 :)</span>
        </div>
        <Image 
          src={`/about-${character}.png`} alt="profile" width={300} height={300} 
          className={`mx-auto transition-opacity duration-300 ease-in-out`}
        />
        <div id="skill" className="flex flex-wrap flex-col justify-center items-center bg-black w-fit mx-auto py-2 px-10 rounded-md gap-3">
          <div className="flex flex-wrap gap-3 text-white">
            <span>Language</span>
            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&amp;logo=Javascript&amp;logoColor=black" alt="Javascript" />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&amp;logo=TypeScript&amp;logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/jquery-0769AD?style=flat&amp;logo=jquery&amp;logoColor=white" alt="Chart.js" />
          </div>  
          <div className="flex flex-wrap gap-3 text-white">
            <span>Front-End</span>
            <img src="https://img.shields.io/badge/Next.js-000000?style=flat&amp;logo=next.js&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&amp;logo=React&amp;logoColor=black" alt="React" />
            <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&amp;logo=ReactQuery&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/angularJS-DD0031?style=flat&amp;logo=angular&amp;logoColor=white" alt="angularJS" />
          </div>
          <div className="flex flex-wrap gap-3 text-white">
            <span>Library</span>
            <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat&amp;logo=Chart.js&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/recharts-f67377?style=flat&amp;logo=recharts.js&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/D3-F9A03C?style=flat&amp;logo=d3.js&amp;logoColor=white" alt="Chart.js" />
          </div>
          <div className="flex flex-wrap gap-3 text-white">
            <span>Styling</span>
            <img src="https://img.shields.io/badge/styled component-DB7093?style=flat&amp;logo=styledcomponents&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&amp;logo=tailwindcss&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/emotion-f67377?style=flat&amp;logo=emotion&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&amp;logo=mui&amp;logoColor=white" alt="Chart.js" />
            <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat&amp;logo=antdesign&amp;logoColor=white" alt="Chart.js" />
          </div>
        </div>
        <div className="w-fit mx-auto flex flex-wrap gap-3 mt-3" onMouseLeave={() => setCharacter('default')}>
          {
            aboutInfo.map((info) => (
              <span 
                key={info.key} 
                className="bg-pink-500 text-white font-bold rounded-full px-4 py-2 cursor-pointer" 
                onMouseEnter={() => setCharacter(info.key)}
                onClick={() => window.open(info.url, '_blank')}
              >
                #{info.key}
              </span>
            ))
          }
        </div>
      </div>
    </section>
  );
}