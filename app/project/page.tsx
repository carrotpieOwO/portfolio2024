'use client';

import works from "@/app/utill/works";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { getImageUrl } from "../utill/skillIcons";
import Internet from '@/public/images/icons/internet.svg'
import Code from '@/public/images/icons/code.svg'
import Detail from '@/public/images/icons/detail.svg'
import { useRouter } from "next/navigation";
import { useProject } from "@/app/store/useProject";
import { useEffect, useRef } from "react";
import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Projects() {
    const { projectColor, index, setIndex } = useProject()
    const router = useRouter();
    const projectRef = useRef<HTMLDivElement>(null);
    let scrollTriggerRef:ScrollTrigger | null = null;

    const handleSlide = ({ activeIndex } : { activeIndex: number}) => {
        setIndex(activeIndex)
    }
    // project card의 버튼 클릭
    const handleClick = (link: { type: string; url: string }) => {
        if (link.type !== 'Detail') {
            // code, live view의 경우 해당 페이지로 이동
            window.open(link.url)
        }
        else {
            router.push(`/project/${link.url}`)
        }
    }
    
    useEffect(() => {
        const project = projectRef.current;


    // 기존 트리거가 있으면 제거
    if (scrollTriggerRef) {
        scrollTriggerRef.kill();
    }

        if(!scrollTriggerRef) {
            scrollTriggerRef = _ScrollTrigger.create({
                trigger: project,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => gsap.to('body', { background: projectColor, duration: 2 }),
                onLeave: () => gsap.to('body', { background: 'rgb(211, 227, 253)', duration: 2 }),
                onEnterBack: () => gsap.to('body', { background: projectColor, duration: 1 }),
                onLeaveBack: () => gsap.to('body', { background: '#1e232b', duration: 1 }),
            });
        } else {
            scrollTriggerRef.vars.onEnter = () => gsap.to('body', { background: projectColor, duration: 2 })
            scrollTriggerRef.vars.onEnter = () => gsap.to('body', { background: projectColor, duration: 2 })
        }
        
        return () => {
            if(!!scrollTriggerRef) {
                scrollTriggerRef.kill()
                scrollTriggerRef = null;
            }
        };

    }, [projectColor])
    
    return (
        <section 
            id="projects"
            ref={projectRef}
            className={`relative w-full h-[100vh] transition-colors duration-500 ease-in-out flex-column items-center px-5 sm:px-0`}
        >
            <p className="absolute top-0 sm:top-12 left-1 sm:left-10  xl:left-1/3 text-9xl font-bold text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>Projects.</p>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                onSlideChange={handleSlide}
                initialSlide={index}
            >
                {
                    works.map((item, i) => (
                        <SwiperSlide key={item.projectId}>
                            <img className="object-fill h-[55%] w-full rounded-[13px]" src={item.mainImg} alt={item.projectNm} />
                            <div className="p-2">
                                <h3 className="font-bold mt-3 text-lg">{item.projectNm} ({item.period})</h3>
                                <div className="flex flex-wrap gap-[5px] py-4 h-[77px]">
                                {
                                    item.skills.map((skill: string)    => (
                                        <img key={`${item.projectId}-${skill}`} src={getImageUrl(skill)} alt={skill} className="h-[20px]"/>
                                    ))
                                }
                                </div>
                                <p className="h-[63px] line-clamp-3 overflow-hidden whitespace-normal text-ellipsis">{item.description}</p>
                            </div>
                            <div className={`${item.link.length === 1 ? 'flex' : 'grid grid-cols-[2fr_7fr]'} gap-2 m-2`}>
                            {
                                item.link && item.link.map((link) => (
                                    <button
                                        key={`${item.projectId}-${link.type}`}
                                        className={`slider-btn ${i === index && 'target'}`}
                                        style={{backgroundColor: i === index ? works[index].color : 'rgba(0, 0, 0, .2)', pointerEvents: i === index ? 'all' : 'none'}}
                                        onClick={() => handleClick(link)}
                                    >
                                        {link.type === 'Site' ? (
                                            <><Internet className={`w-5 h-5 ${i === index ? 'fill-white' : 'fill-black'}`} /> Live View</>
                                        ) : link.type === 'Git' ? (
                                            <Code className={`w-5 h-5 ${i === index ? 'fill-white' : 'fill-black'}`}  />
                                        ) : (
                                            <><Detail className={`w-5 h-5 ${i === index ? 'fill-white' : 'fill-black'}`} />Detail</>
                                        )}
                                    </button>
                                ))
                            }
                            </div>
                        </SwiperSlide>  
                    ))
                }
            </Swiper>
        </section>
    )
}   