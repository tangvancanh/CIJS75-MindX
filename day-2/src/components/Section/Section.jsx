const Section = ({ h1, p,img}) => {
    return (
        <div class="section">
            <div class="text">
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
            <div class="img">
                <img src={img} alt="img" />
            </div>
        </div>
    );
}

export default Section;