import Heading from "../helpers/headings";
import Cards from "../helpers/Cards";
import Tags from "../helpers/Tags";
import Modals from "../helpers/Modals";
const Portfolio = () => {
    const date = "1 month ago";
    // const [projects, setProjectDetail]=useState([{},]);
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Heading firstName="My" secondName="Portfolio" color="#00f" />
            </div>
            <div className="head">
                <h2 >My Projects :</h2>
                <div className="language">
                    <a href="#1" className="anchorTag"><Tags name="Post Book" color="rgb(254, 149, 11)" id="1"/></a>
                   <a href="#2" className="anchorTag"> <Tags name="Clock (Digital & Analog)" color="rgb(153, 254, 11)" id="2" /></a>
                    <a href="#3" className="anchorTag"><Tags name="Api Fetch" color="rgb(234, 11, 254)" id="3"/></a>
                    <a href="#4" className="anchorTag"><Tags name="My Portfolio Website" color="#00e" id="4"/></a>
                </div>


                <h2>Technology Used :</h2>
                <div className="language">
                    <Tags name="JavaScript" color="rgb(254, 149, 11)" />
                    <Tags name="React.js" color="rgb(234, 11, 254)" />
                    <Tags name="Bootstrap" color="#aaf" />
                    <Tags name="CSS3" color="#00e" />
                    <Tags name="HTML5" color="rgb(11, 145, 254)" />
                    <Tags name="Firebase" color="rgb(11, 254, 161)" />
                </div>
            </div>
            <h2 className="projects">My Projects</h2>
            <div className="portfolioContainer">
                <button className="portfolio" id="1">
                    <Cards
                        src="jiteshPortfolio.jpg"
                        alt="jitesh shukla"
                        head="jitesh shukla"
                        des="a highly intelligent person"
                        date={date}
                    />
                    <div className="language">
                        <Tags name="JavaScript" color="#f0f" />
                        <Tags name="React.js" color="#ff0" />
                        <Tags name="Bootstrap" color="#0ff" />
                        <Tags name="Css" color="#00e" />
                    </div>
                </button>
                <button className="portfolio" id="2">
                    <Cards
                        src="jiteshPortfolio.jpg"
                        alt="my image"
                        head="Arrays"
                        des="this is my text"
                        date={date}
                    />
                    <div className="language">
                        <Tags name="JavaScript" color="#f0f" />
                        <Tags name="React.js" color="#ff0" />
                        <Tags name="Bootstrap" color="#0ff" />
                        <Tags name="Css" color="#00e" />
                    </div>
                </button>
                <button className="portfolio" id="3">
                    <Cards
                        src="jiteshPortfolio.jpg"
                        alt="my image"
                        head="Arrays"
                        des="this is my text"
                        date={date}
                    />
                    <div className="language">
                        <Tags name="JavaScript" color="#f0f" />
                        <Tags name="React.js" color="#ff0" />
                        <Tags name="Bootstrap" color="#0ff" />
                        <Tags name="Css" color="#00e" />
                    </div>
                </button>
                <button className="portfolio" id="4">
                    <Cards
                        src="jiteshPortfolio.jpg"
                        alt="my image"
                        head="Arrays"
                        des="this is my text"
                        date={date}
                    />
                    <div className="language">
                        <Tags name="JavaScript" color="#f0f" />
                        <Tags name="React.js" color="#ff0" />
                        <Tags name="Bootstrap" color="#0ff" />
                        <Tags name="Css" color="#00e" />
                    </div>
                </button>
            </div>
            <Modals/>
        </>
    );
}

export default Portfolio;