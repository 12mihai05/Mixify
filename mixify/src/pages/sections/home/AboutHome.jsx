import { Link } from "react-router-dom"
import "../../home.css"

export default function AboutHome(){
    return (
        <div className="about-section">
            <div className="container">
            <h1 className="title">
                About <span>Mixify</span>
            </h1>

            <div className="paragraphs">
                <p>
                    <b>Mixify</b> transforms your Spotify experience with deeper 
                    insights and interactive tools. Our mission is to connect 
                    you with your music on a more personal level, making every 
                    track and playlist meaningful.
                </p>

                <p>
                    <b>Discover More:</b> Learn about our vision and 
                    how we’re changing the way you experience music.
                </p>

                <Link to="/about">
                <button className="discover"> Discover More </button>
                </Link>
            </div>
            </div>
        </div>
    );
}