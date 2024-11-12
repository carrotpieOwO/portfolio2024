import "./style.css";
import About from "./about/page";
import Mouse from "./components/Mouse";
import Projects from "./project/page";
import Room from "./components/Room";
import Contact from "./contact/page";

export default function Home() {
  return (
      <main className="main flex flex-col row-start-2 items-center sm:items-start w-full overflow-hidden">
        <div className="welcome">
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
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          todo: footer        
        </footer>
      </main>
  );
}
