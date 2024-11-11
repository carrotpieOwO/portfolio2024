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
import { useRef } from "react";
import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Projects() {
    const { projectColor, index, setIndex } = useProject()
    const router = useRouter();
    const projectRef = useRef<HTMLDivElement>(null);
    const project = projectRef.current;

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
    
    _ScrollTrigger.create({
        trigger: project,
        start: 'top center', // 섹션의 상단이 화면 중앙에 도달할 때 시작
        end: 'bottom center', // 섹션의 하단이 화면 중앙에 도달할 때 끝
        onEnter: () => gsap.to('body', { background: projectColor, duration: 2 }),
        onLeave: () => gsap.to('body', { background: 'linear-gradient(to bottom, #fec6de 5%,rgba(255, 255, 255, 1) 25%)', duration: 2 }),
        onEnterBack: () => gsap.to('body', { background: projectColor, duration: 1 }),
        onLeaveBack: () => gsap.to('body', { background: '#1e232b', duration: 1 }),
    });
    
    return (
        <section 
            id="project"
            ref={projectRef}
            className={`relative w-full h-[100vh] transition-colors duration-500 ease-in-out flex items-center`}
            //style={{ backgroundColor: projectColor, transition: 'background-color 0.5s ease' }}
        >
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
                            <div className="p-2 px-4">
                                <h3 className="font-bold mt-3 text-lg">{item.projectNm} ({item.period})</h3>
                                <div className="flex gap-[5px] py-4">
                                {
                                    item.skills.map((skill: string)    => (
                                        <img key={`${item.projectId}-${skill}`} src={getImageUrl(skill)} alt={skill} />
                                    ))
                                }
                                </div>
                                <p className="h-[63px]">{item.description}</p>
                            </div>
                            <div className={`${item.link.length === 1 ? 'flex' : 'grid grid-cols-[2fr_7fr]'} gap-2 m-2`}>
                            {
                                item.link && item.link.map((link) => (
                                    <button
                                        key={`${item.projectId}-${link.type}`}
                                        className={`slider-btn ${i === index && 'target'}`}
                                        style={{backgroundColor: i === index ? works[index].color : 'rgba(0, 0, 0, .2)',}}
                                        onClick={() => handleClick(link, item)}
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