'use client'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import _ScrollTrigger from 'gsap/ScrollTrigger';

export default function Contact() {
    const contactRef = useRef<HTMLDivElement>(null);
    const form = useRef<HTMLFormElement>(null)

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        try {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_MAIL_SERVER_KEY || '',
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY || '',
                form.current as unknown as HTMLFormElement,
                process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY || ''
            )
            console.log('성공')
            // todo: 메세지
        } catch (error) {
            console.log('실패', error)
        }
    }

    return (
        <section id="contact" className="relative h-[100vh] w-full transition-colors duration-500 ease-in-out" ref={contactRef}>
            <p className="absolute text-9xl font-bold text-transparent my-10 sm:my-32 left-1 sm:left-10" style={{ WebkitTextStroke: '1px #fff' }}>Contact.</p>
            <div className='relative top-[20%] shadow-md shadow-black/20 rounded-[20px] bg-white w-fit min-w-[350px] sm:w-[750px] mx-auto'>
                <div className='flex items-center p-3 gap-2'>
                    <span className='w-4 h-4 bg-[#ff5f57] border border-[#e1443b] rounded-[50%]' />
                    <span className='w-4 h-4 bg-[#f6b63e] border border-[#d89a32] rounded-[50%]' />
                    <span className='w-4 h-4 bg-[#33c349] border border-[#26a533] rounded-[50%]' />
                </div>
                <form ref={form} onSubmit={handleSubmit} className='p-5'>
                    <div className="relative mb-6">
                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                            Name 
                            <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                            </svg>
                        </label>
                        <input type="text" id="default-search" className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-[12px] placeholder-gray-400 focus:outline-none " placeholder="Name" required />
                    </div>
                    <div className="relative mb-6">
                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                            Email 
                            <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                            </svg>
                        </label>
                        <input type="email" id="default-search" className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-[12px] placeholder-gray-400 focus:outline-none " placeholder="ha0@kakao.com" required />
                    </div>
                    <div className="relative mb-6">
                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                            Message 
                            <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
                            </svg>
                        </label>
                        <div className="flex">
                            <div className="relative w-full">
                                <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-[12px] placeholder-gray-400 focus:outline-none resize-none" placeholder="궁금한 점이 있으시다면 언제든 메시지를 보내주세요!" required></textarea>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className="w-full h-12 bg-[#a9b2fd] hover:bg-[#fd9ec6] transition-all duration-700 rounded-[12px] shadow-xs text-white text-base font-semibold leading-6">Send Message</button>
                </form>
            </div>
        </section>
    )
}