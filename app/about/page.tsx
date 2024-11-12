'use client';
import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { aboutInfo } from "../utill/aboutInfo";
import BubbleSpeach from "../components/BubbleSpeach";
import Button from "../components/Button";
import SkillGroup from "../components/SkillGroup";
import { useProject } from "../store/useProject";

export default function About() {
  const [character, setCharacter] = useState('default');
  const titleRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  const nightRef = useRef<HTMLDivElement>(null);
  const prontendRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);
  const { projectColor } = useProject()

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = titleRef.current;
    const typing = typingRef.current;
    const night = nightRef.current;
    const frontend = prontendRef.current;
    const developer = developerRef.current;

    // front-end 애니메이션
    gsap.fromTo(frontend, 
      { x: "100%" }, // 시작 위치: 오른쪽 화면 밖
      {
        x: "-50%", // 끝 위치: 왼쪽 화면 밖
        duration: 2,
        scrollTrigger: {
          trigger: title,
          start: "top bottom", // 요소의 top이 viewport의 bottom에 도달했을 때 시작
          end: "bottom top", // 요소의 bottom이 viewport의 top에 도달했을 때 끝
          toggleActions: "play none none reverse",
          scrub: true,
        }
      }
    );

    // developer 애니메이션
    gsap.fromTo(developer, 
      { x: "-100%" }, // 시작 위치: 왼쪽 화면 밖
      {
        x: "50%", // 끝 위치: 오른쪽 화면 밖
        duration: 2,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: true,
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

    _ScrollTrigger.create({
      trigger: night,
      start: 'top center', // 섹션의 상단이 화면 중앙에 도달할 때 시작
      end: 'bottom center', // 섹션의 하단이 화면 중앙에 도달할 때 끝
      onEnter: () => gsap.to('body', { background: '#1e232b', duration: 2 }),
      onLeave: () => gsap.to('body', { background: projectColor, duration: 2 }),
      onEnterBack: () => gsap.to('body', { background: '#1e232b', duration: 1 }),
      onLeaveBack: () => gsap.to('body', { background: 'linear-gradient(to bottom, #fec6de 5%,rgba(255, 255, 255, 1) 25%)', duration: 1 }),
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

  return (
    <section className="relative min-h-[100vh] w-full flex items-center flex-column" ref={nightRef}>
      <div ref={titleRef} className="absolute top-1/2 w-full text-7xl font-bold text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>
        <span ref={prontendRef} className="front-end block">FRONT-END</span>
        <span ref={developerRef} className="developer block">DEVELOPER</span>
      </div>
      <div className={`w-full mx-auto py-10`}>
        <div className={`w-fit sm:w-[750px] mx-auto sm:bg-[#353F4C] p-5 sm:p-10 sm:border border-neutral-700 sm:shadow-md sm:rounded-[20px]`}>
          <div ref={typingRef} className="h-[144px]">
            <div className="flex justify-center items-center text-white text-2xl sm:text-4xl">
                안녕하세요!&nbsp;
                <div className="shake">
                  👋🏻
                </div> 
            </div>
            <span className="text-white text-2xl sm:text-4xl">저는&nbsp;</span>
            <TypeAnimation
                className="text-[#EF629F] text-2xl sm:text-4xl"
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
            <span className="text-white text-2xl sm:text-4xl">&nbsp;최하영입니다 :)</span>
          </div>
          <div className="flex justify-center items-center relative h-[264px] max-w-[1000px] mx-auto">
            <Image 
              src={`/about-${character}.png`} alt="profile" width={300} height={300} 
              className={`transition-opacity duration-300 ease-in-out absolute left-1/2 transform -translate-x-1/2`}
            />
            {
              character !== 'default' && <BubbleSpeach message={aboutInfo.find(info => info.key === character)?.message} />
            }
          </div>
          <SkillGroup />
          <div className="w-fit mx-auto flex justify-center flex-wrap gap-3 mt-3" onMouseLeave={() => setCharacter('default')}>
            {
              aboutInfo.map((info) => (
                <Button 
                  key={info.key} 
                  onHover={() => setCharacter(info.key)}
                  onClick={() => window.open(info.url, '_blank')}
                >
                  #{info.key}
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}