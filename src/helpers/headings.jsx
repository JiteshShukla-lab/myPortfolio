const Heading = (prop) => {
    const { firstName, secondName, color } = prop;
    return (
        <>
            <div className="heading">
                <h1 >{firstName} <span style={{ color: color }}>{secondName}</span></h1>
            </div>
        </>
    );
}
export default Heading;