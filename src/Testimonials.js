import avatar from "./images/avatar-anisha.png";
import avatar2 from "./images/avatar-ali.png";
import avatar3 from "./images/avatar-richard.png";
import avatar4 from "./images/avatar-shanai.png";
import { useState } from "react";
import NormalSlides from "./Slides";
import PageSlides from "./SwiperSlides";

const Testimonials = () => {
    const [data, setData]  = useState(
        [
            {
                name: "Anisha Li",
                text: `“Manage has supercharged our team's workflow. The ability to maintain 
                visibility on larger milestones at all times keeps everyone motivated”`,
                img: avatar
            },
            {
                name: "Ali Bravo",
                text: ` “We have been able to cancel so many other subscriptions since using 
                Manage. There is no more cross-channel confusion and everyone is much 
                more focused.”`,
                img: avatar2
            },
            {
                name: "Richard Watts",
                text: `  “Manage allows us to provide structure and process. It keeps us organized 
                and focused. I can’t stop recommending them to everyone I talk to!”`,
                img: avatar3
            },
            {
                name: "Shanai Gough",
                text: `“Their software allows us to track, manage and collaborate on our projects 
                from anywhere. It keeps the whole team in-sync without being intrusive.”`,
                img: avatar4
            }
        ]
    )
        const handleChange = e => setMatch(e.matches)
        const [match, setMatch] = useState(window.matchMedia("(max-width: 900px)").matches)
        window.matchMedia("(max-width: 900px)").addEventListener("change", handleChange)
    return (
        <div className="testimonial">
            <h2>What they've said</h2>
             <section className="section-3">
               {match && <PageSlides data={data}/> }
               {!match && <NormalSlides data={data}/>}
            </section>
        <div>
        <button className="cta-btn">Get Started</button>
        </div>
        </div>
    );
}

export default Testimonials;