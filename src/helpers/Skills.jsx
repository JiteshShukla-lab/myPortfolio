const Skills=({skill,percent})=>{
    return (
        <>
        <div className="skill">
            <div >
                <span>{percent}%</span>
            </div>
            <p>{skill}</p>
        </div>
        </>
    );
}


export default Skills;