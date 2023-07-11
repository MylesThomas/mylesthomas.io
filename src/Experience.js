import "./Experience.css";
import mckinseyImage from "./figures/mckinsey.jpg";
import sqImage from "./figures/shot-quality.jpg";
import btImage from "./figures/baker-tilly.jpg";
import mylesThomasImage from "./figures/myles-thomas.jpg";

// import { Link } from "react-router-dom"; // So that we can use Links in the items for ShotQuality

const Experience = () => {
    const items = [
        {
            title: "Senior Data Scientist",
            company: "McKinsey & Company",
            date: "2022 - Current",
            description: "Working alongside the world's leading businesses, governments, and institutions.",
            points: [

            ],
            image: mckinseyImage
        },

        {
            title: "Music Producer / DJ",
            company: "Myles Thomas LLC",
            date: "2022 - Current",
            description: "",
            points: [

            ],
            image: mylesThomasImage
        },

        {
            title: "Quantitative Researcher",
            company: "ShotQuality",
            date: "August 2021 - August 2022",
            description: "Leveraged proprietary data to optimize the decision making of High Major NCAA D1 clients and developed profitable sports betting models.",
            points: [
                "https://shotquality.com",
                "https://shotqualitybets.com",
            ],
            image: sqImage
        },

        {
            title: "Consultant",
            company: "Baker Tilly",
            date: "June 2021 - August 2022",
            description: "Developed software with machine learning applications to optimize the operational efficiency of clients in the supply chain industry.",
            points: [
                // "Software Engineering: Full-stack Python developer",
                // "Machine Learning Engineering: Model Validation",
            ],
            image: btImage
        }
    ]

    // Used for links below
    // const openInNewTab = (url) => {
    //     window.open(url, "_blank", "noreferrer");
    //   };

    return (
        <div className="experience">
            <h1 className="header">Work Experience</h1>
            <div className="work-items">
                {items.map((item) => (
                    <div className="item" key={Math.random()}>
                        <img src={item.image} alt="logo" className="logo"/>
                        <div className="item-content">
                            <div className="item-header"> 
                            <h2 className="no-margin">{item.title}</h2>
                            <h4 className="no-margin">{item.company}</h4>
                            <p className="no-margin text-muted">{item.date}</p> 
                            </div>

                            {/* <p className="no-margin">{item.description}</p>
                            <ul className="points">
                                {item.points.map((point) => (
                                    <li key={Math.random()}>{point}</li>
                                ))} 
                            </ul> */}

                            <p className="no-margin">{item.description}</p>

                            {/* Adding the points as links, for now */}
                            <ul className="links">
                                {item.points.map((point) => (
                                    <li key={Math.random()}>
                                        {/* <a href={point}>{point}</a> */}
                                        <a style={{display: "table-cell"}} href={point} target="_blank" rel="noreferrer">{point}</a> 

                                        {/* To enhance security, we also assign the rel attribute with the value of noreferrer. 
                                        This prevents the opened document from obtaining any information about the page that originated the request. */}
{/* 
                                        <p>Visit in a new tab</p>{" "}
                                            <button
                                                role="link"
                                                onClick={() => openInNewTab({point})}
                                            >
                                                {point}
                                            </button> */}

                                    </li>
                                ))} 
                            </ul>
                            {/* End of links */}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;