// import tags from "../helpers/Tags";
const Cards=(prop)=>{
    const{src,head,des,date,alt}=prop;
    return(
        <>
        <div className="cards">
            <div className="cardImage">
            <img src={src} alt={alt} />
            </div>
            <div>

            <span>{date}</span>
            </div>
            <h2>{head}</h2>
            <p>{des}</p>
           <hr/>
            
        </div>
        </>
    );

} 

export default Cards;