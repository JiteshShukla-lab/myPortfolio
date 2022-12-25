// import Image from "../helpers/image";
import Heading from "../helpers/headings";
import {Link} from "react-router-dom";
import Button from "../helpers/Button";
import Marquee from "../helpers/Marquee";

const Home = () => {
    const color = {
        red: "#f00",
        voilet: "#f0f",
        blue: "#00f"
    }
    const skills = {
        react: 'React.js',
        Redux: 'Redux Toolkit',
        Javascript: 'Javascript',
        es: 'ES6',
        JQuery: 'JQuery',
        Bootstrap: 'Bootstrap',
        Saas: 'Saas',
        css: 'CSS3',
        html: 'HTML5'
    }
    return (

        <>
            {/* <Sidebar /> */}
            <div className="homepage">
                <div className="headImage">
                    <div>
                        <div className="image">
                            <img src="jiteshPortfolio.jpg" alt="Jitesh Shukla" />
                        </div>
                        <Marquee skill={skills} />
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                        <Heading firstName={"Jitesh"} secondName={"shukla"} color={color.blue} />
                        <h2 style={{ fontSize: "40px", marginLeft: "10px" }}>web developer</h2>
                        <p style={{ fontSize: "25px", padding: "10px" }}>  A passionate web  developer with proficiency in <b>Javascript ,
                            React.js </b> and ability to  develop responsive web pages focused on
                            crafting clean and user friendly  experiences. Aspiring to combine
                            broad background with strong technical
                            skills to excel as a Fullstack web engineer. </p>

                        <Link to="About">
                            <span className="homeButton">

                        <Button buttonName="More About Me" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;