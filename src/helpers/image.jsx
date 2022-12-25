// import "../assets/jiteshPortfolio.JPG";
const Image=(prop)=>{
    const {url}=prop;
  return(
    <>
    <div>
    <img src={url} alt="Jitesh Shukla"  />
    </div>
    </>

  );
}

export default Image;