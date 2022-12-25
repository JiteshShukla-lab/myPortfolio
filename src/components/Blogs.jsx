import Heading from "../helpers/headings";
import Cards from "../helpers/Cards";
import Tags from "../helpers/Tags";

const Blogs = () => {
    const date = "22/Dec/2022";

    return (
        <>
            
            <div style={{ textAlign: "center" }}>
                <Heading firstName="My" secondName="Blogs" color="#00f" />
            </div>
            <div className="head">

                <div className="quote">      
                <p>"All our dreams can come true – if we have the courage to pursue them."
                    <sub>-Walt Disney</sub></p>
                </div>


                <h2>My Skills :</h2>
                <div className="language">
                    <Tags name="JavaScript" color="#f0f" />
                    <Tags name="React.js" color="rgb(234, 11, 254)" />
                    <Tags name="Bootstrap" color="rgb(254, 149, 11)" />
                    <Tags name="CSS3" color="#00e" />
                    <Tags name="HTML5" color="rgb(11, 145, 254)" />
                    <Tags name="Firebase" color="rgb(11, 254, 161)" />
                </div>
            </div>
            <h2 className="projects">Blogs</h2>
            <div className="portfolioContainer">
                <button className="portfolio">
            
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
                <button className="portfolio">
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
        </>
    );
}

export default Blogs;