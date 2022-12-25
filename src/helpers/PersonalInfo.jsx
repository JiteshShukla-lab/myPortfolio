import Button from "./Button";

const PersonalInfo = () => {
    return (
        <>
            <div >
                <h2 style={{ fontSize: "35px", margin: "5px 0px 5px 0px" }}>Personal Infos</h2>

                <ul style={{ float: "left", listStyle: "none"}}>
                    <li className="infolist"><span className="lable">First Name:</span><span className="info">  Jitesh</span></li>
                    <li className="infolist"><span className="lable">Last Name:</span><span className="info">  Shukla</span></li>
                    <li className="infolist"><span className="lable">Age:</span><span className="info">  24 years</span></li>
                    <li className="infolist"><span className="lable">Nationality:</span><span className="info">  Indian</span></li>
                    <li className="infolist"><span className="lable">Freelance:</span><span className="info">  Available</span></li>
                </ul>



                <ul style={{ float: "right", listStyle: "none" }}>
                    <li className="infolist"><span className="lable">Address: </span><span className="info">  India</span></li>
                    <li className="infolist"><span className="lable">Phone: </span><span className="info">  +91 9650522124</span></li>
                    <li className="infolist"><span className="lable">Email: </span><span className="info">  jiteshshukla98@gmail.com</span></li>
                    <li className="infolist"><span className="lable">Skype: </span><span className="info">  Jitesh Shukla</span></li>
                    <li className="infolist"><span className="lable">Languages: </span><span className="info">  English, Hindi</span></li>
                </ul>
                <div className="cvButton">
                <span>

                <Button buttonName="Download CV"/>
                </span>
                </div>

            </div>
        </>
    );
}
export default PersonalInfo;