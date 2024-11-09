'use client';

import { useState } from "react";
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

export default function Projects() {
    // todo: 프로젝트 디테일에서 타겟 인덱스 넘겨주는거 반영하기
    const [ targetIndex, setTargetIndex ] = useState(0);
    const router = useRouter();

    const handleSlide = ({ activeIndex } : { activeIndex: number}) => {
        setTargetIndex(activeIndex)
    }

    // project card의 버튼 클릭
    const handleClick = (link: any, item: any) => {
        if (link.type !== 'Detail') {
            // code, live view의 경우 해당 페이지로 이동
            window.open(link.url)
        } 
        else {
            router.push(`/project/${link.url}`)
        }
    }
    
    
    return (
        <section 
            className={`relative w-full h-[100vh] transition-colors duration-500 ease-in-out flex items-center`}
            style={{ backgroundColor: works[targetIndex].color, transition: 'background-color 0.5s ease' }}
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
                                        className={`slider-btn ${i === targetIndex && 'target'}`}
                                        style={{backgroundColor: i === targetIndex ? works[targetIndex].color : 'rgba(0, 0, 0, .2)',}}
                                        onClick={() => handleClick(link, item)}
                                    >
                                        {link.type === 'Site' ? (
                                            <><Internet className={`w-5 h-5 ${i === targetIndex ? 'fill-white' : 'fill-black'}`} /> Live View</>
                                        ) : link.type === 'Git' ? (
                                            <Code className={`w-5 h-5 ${i === targetIndex ? 'fill-white' : 'fill-black'}`}  />
                                        ) : (
                                            <><Detail className={`w-5 h-5 ${i === targetIndex ? 'fill-white' : 'fill-black'}`} />Detail</>
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