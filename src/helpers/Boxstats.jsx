const Boxstats=({num,str1,str2,sign})=>{
    return(
        <>
        <div className="Boxstats">
            <h3 >{num}<sup>{sign}</sup></h3>
            <p>{str1}</p><span className="str2">{str2}</span>
        </div>
        </>
    );
}

export default Boxstats;