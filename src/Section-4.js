import svg from "./images/bg-simplify-section-desktop.svg"
const Section4 = () => {
    return (  
        <section className="section-4">
            <div>
                <h3>Simplify how your team works today.</h3>
            </div>
            <div>
                <button>Get Started</button>
            </div>
                <img className="bg-image-3" src={svg} alt="" />
        </section>
    );
}
 
export default Section4;