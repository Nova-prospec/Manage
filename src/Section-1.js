
import image from "./images/illustration-intro.svg"
const Section1 = () => {
    return (
        <section className="section-1">
            <div>
                <h1>Bring everyone together to build better products.</h1>
                <p>  Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.</p>
                    <button style={{marginTop: "1rem"}} className="cta-btn">Get Started</button>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </section>
    );
}

export default Section1;