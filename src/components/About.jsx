// import Sidebar from "../helpers/Sidebar";
import Heading from "../helpers/headings";
import PersonalInfo from "../helpers/PersonalInfo";
import Boxstats from "../helpers/Boxstats";
import Skills from "../helpers/Skills";
import Ecards from "../helpers/Ecards";
const About = () => {
    const color = {
        red: "#f00",
        voilet: "#f0f",
        blue: "#00f",
        black: "#000"
    }
    return (
        <>

            <div style={{ textAlign: "center" }} >

                <Heading firstName={"About"} secondName={"Me"} color={color.blue} />

            </div>
            <div className="flexBox" >
                <div className="flexItem1">
                    <PersonalInfo />

                </div>

                <div className="flexItem2">
                    <Boxstats num="6" sign="" str1="months of" str2="experience" />
                    <Boxstats num="3" sign="+" str1="project" str2="completion" />
                    <Boxstats num="2" sign="+" str1="certificates" str2="earned" />
                    {/* <Boxstats num="2" sign="" str1="project" str2="completion" /> */}
                </div>


            </div>
            <div className="skillsContainer">
                <h2>Skills</h2>
                <div className="Myskills">
                    <Skills skill="React.js" percent="80" />
                    <Skills skill="Redux Toolkit" percent="70" />
                    <Skills skill="JavaScript" percent="90" />
                    <Skills skill="Firebase" percent="70" />
                    <Skills skill="Bootstrap" percent="80" />
                    <Skills skill="CSS3" percent="80" />
                    <Skills skill="HTML5" percent="70" />
                </div>

            </div>
            <div className="educationContainer">
                <h2>Experience & Education</h2>
                <div className="exp">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500 ">
                            <path fill="#fff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 
                512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 
                32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                        <h2>Fresher</h2>
                    </div>
                </div>
                <div >
                    <Ecards course="Bachelor of Computer Application" board="Chaudhary Charan Singh University" year="2020" per="61" />
                    <Ecards course="12th Intermediate" board="Central Board of Secondary Education" year="2017" per="53" />
                    <Ecards course="10th Matriculate" board="Central Board of Secondary Education" year="2015" per="64" />
                </div>
            </div>
        </>
    );
}

export default About;