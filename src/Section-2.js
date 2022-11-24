import { useState } from "react";

const Section2 = () => {
    const [data, setData] = useState([
        {
            id: "01",
            text: `Track company-wide progress`,
            body: `See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`
        },
        {
            id: "02",
            text: "Advanced built-in reports",
            body: `Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.`
        },
        {
            id: "03",
            text: "Everything you need in one place",
            body: `Stop jumping from one service to another to communicate, store files, 
            track tasks and share documents. Manage offers an all-in-one team 
            productivity solution.`
        }
    ])

    return (
        <section className="section-2">
            <div className="section-2-main">
                <h2> What's different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams. </p>
            </div>
            <div>
                <div className="article-parent">
                    {
                        data.map(
                            (data, i) => {
                                return (
                                    <article key={i}>
                                        <span className="article-number">{data.id}</span>
                                        <div className="article-text">
                                            <h5>{data.text}</h5>
                                            <p>{data.body}</p>
                                        </div>
                                    </article>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Section2;