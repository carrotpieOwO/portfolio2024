import "./style.css";
import About from "./about/page";
import Mouse from "./components/Mouse";
import Projects from "./project/page";
import Room from "./components/Room";
import Contact from "./contact/page";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
      <main className="main flex flex-col row-start-2 items-center sm:items-start w-full overflow-hidden">
        <div id="home" className="welcome">
          <div className="relative top-[25%] ">
            <div className="heart">❤️</div>
            <h1 className="mt-6 fade-in-blur text-4xl font-bold text-wrap">
              Welcome to my Portfolio Page!
            </h1>
            <p className="fade-in-up text-nowrap">제 포트폴리오 페이지에 오신 것을 환영합니다 :)</p>
          </div>
          <Room />
        </div>
        <Mouse />
        <About />
        <Projects />
        <Contact />
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center max-w-[100vw] md:max-w-screen-xl">
          <p className="text-9xl font-bold text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>Thank you</p>
          <div className="w-full flex justify-between items-center px-5 py-2 sm:px-0 sm:py-10">
            <a href="https://github.com/carrotpieOwO" hrefLang="github" target="_blank" className="text-xl sm:text-3xl">
              <FaGithub />
            </a>
            <div className="font-bold">
              <span className="text-lg sm:text-2xl text-gray-500 mr-2">Designed & Developed By</span>
              <span className="text-xl sm:text-3xl text-pink-500">ha0</span>
            </div>
          </div>
        </footer>
      </main>
  );
}
