import Head from "./Head";
import "./Assets/CSS/Portfolio.css";
import { portfolioData } from "../data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Project from "../Project";
export default function Portfolio() {
    return (
        <section className="portfolio py-5" id="portfolio">
            <div className="container">
                <Head title="Portfolio" dark={false} />
                <div className="row">
                    <OwlCarousel
                        items={1}
                        className="owl-theme owl-drag"
                        loop
                        autoplay={true}
                        autoplayHoverPause={true}
                        mouseDrag={true}
                        fluidSpeed={800}
                    >
                        {portfolioData.map((project) => {
                            return (
                                <div key={project.id}>
                                    <Project project={project} />
                                </div>
                            );
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}
