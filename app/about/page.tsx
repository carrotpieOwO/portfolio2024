'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { aboutInfo } from "../utill/aboutInfo";
import BubbleSpeach from "../components/BubbleSpeach";
import Button from "../components/Button";
import SkillGroup from "../components/SkillGroup";

export default function About() {
  const [character, setCharacter] = useState('default');
  const titleRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = titleRef.current;
    const typing = typingRef.current;

    gsap.fromTo(title,
      { y: 50 }, // todo: 화면 사이지 적용
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
    <section className="relative h-[100vh] w-full flex items-center flex-column">
      <div ref={titleRef} className="absolute top-[20%] w-full text-7xl font-bold">
        FRONT-END DEVELOPER
      </div>
      <div className="about-container w-full bg-white py-10 bg-white z-10">
        <div ref={typingRef} className="h-[144px]">
          <div className="flex justify-center items-center">
              안녕하세요!&nbsp;
              <div className="shake">
                👋🏻
              </div> 
          </div>
          <span>저는&nbsp;</span>
          <TypeAnimation
              className="text-[#EF629F]"
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
        <div className="w-fit mx-auto flex flex-wrap gap-3 mt-3" onMouseLeave={() => setCharacter('default')}>
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
    </section>
  );
}