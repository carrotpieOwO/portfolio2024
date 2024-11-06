'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";


export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const section = ref.current;

    gsap.fromTo(section,
      { opacity: 0, y: 500 },
      {
        opacity: 1,
        y: 0,
        fontSize: '2rem',
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // 요소의 top이 viewport의 bottom에 도달했을 때 시작
          end: "bottom top", // 요소의 bottom이 viewport의 top에 도달했을 때 끝
          toggleActions: "play none none reverse", // 진입 시 재생, 퇴장 시 역재생
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
    <section ref={ref} style={{ height: '100vh'}}>
      <div className="letterVariants">
          <div>
              안녕하세요!&nbsp;
              <div className="shakeVariants">
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
          <span>&nbsp;최하영입니다. :)</span>{' '}
      </div>
    </section>
  );
}