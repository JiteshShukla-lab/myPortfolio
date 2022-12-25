// import {marquee} from "react-fast-marquee";
const Marquee=(prop)=>{
    const {skill}=prop;
    return(
        <>
        <marquee  behavior="" direction="" play="" >
            <div className="marquee">{skill.react}</div>
            <div className="marquee">{skill.Redux}</div>
            <div className="marquee">{skill.Javascript}</div>
            <div className="marquee">{skill.es}</div>
            <div className="marquee">{skill.JQuery}</div>
            <div className="marquee">{skill.Bootstrap}</div>
            <div className="marquee">{skill.Saas}</div>
            <div className="marquee">{skill.css}</div>
            <div className="marquee">{skill.html}</div>
        </marquee>

        </>
    );
}
export default Marquee;