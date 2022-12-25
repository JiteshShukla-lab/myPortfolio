import Heading from "../helpers/headings";
import Button from "../helpers/Button";
const Contact = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Heading firstName="Get In" secondName="Touch" color="#00f" />
            </div>
            <div className="contactContainer">

                < p >Let's Talk</p>



                <div className="subContainer">
                    <form action="">
                        <input type="text" placeholder="Your Full Name" />
                        <input type="email" placeholder="Your Email Address" />
                        <textarea name="" id="" placeholder="Type Your Message " ></textarea>
                    </form>
                    <div>
                        <span>

                            <Button buttonName="Send" />
                        </span>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;