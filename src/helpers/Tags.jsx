const Tags=({name,color})=>{
    return(
        <>
        <span className="Tags"  style={{backgroundColor:color}}>#{name}</span>
        </>
    );
}
export default Tags;