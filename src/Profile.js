import "./Profile.css";
import image from "./figures/headshot.jpg";
import {
    AiFillTwitterCircle,
    AiFillInstagram,
    // AiFillYoutube,
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import {
    BiLogoSoundcloud
} from "react-icons/bi";

const Profile = () => {
    return (       
        //Starting div
        <div className="section">
            {/* Start of bio div */}
            <div className="bio">
                <p className="no-margin small-text"></p>
                <p className="no-margin name-text">
                    <span className="big-text"> Myles Thomas</span>
                </p>
                <p className="no-margin small-text">
                    McKinsey consultant<span className="highlight-text"></span>, software engineer, music producer
                </p>
                <div className="icons">
                    <a href="https://twitter.com/wisconsinstats" target="_blank" rel="noreferrer">
                        <AiFillTwitterCircle color="white" size={30} />
                    </a>
                
                    <a href="https://instagram.com/myles6thomas/" target="_blank" rel="noreferrer">
                        <AiFillInstagram color="white" size={30} />
                    </a>

                    {/* <a href="https://youtube.com/mylesthomas/">
                        <AiFillYoutube color="white" size={30} />
                    </a> */}

                    <a href="https://github.com/mylesthomas/" target="_blank" rel="noreferrer">
                        <AiFillGithub color="white" size={30} />
                    </a>

                    <a href="https://linkedin.com/in/myles-thomas/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin color="white" size={30} />
                    </a>

                    <a href="https://soundcloud.com/itsmylesthomas/" target="_blank" rel="noreferrer">
                        <BiLogoSoundcloud color="white" size={30} />
                    </a>      
                </div>
                

            </div> 
            <div className="photo">
                <img src={image} className="profile-image" alt="me" />
            </div>
        
        </div> //End of Bio div 
    );
};

export default Profile;
