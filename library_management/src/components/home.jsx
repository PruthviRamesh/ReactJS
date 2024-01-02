import { Link } from "react-router-dom";
import '../styles/home.css'
const Home = () => {
    return ( 
        <div className="home">
            <div>
            <div className='landy'>
            <img src="/landing.jpg" id='landyimg' />
            <div className='landy1'>
            <span className="landspan">Digital Library</span>
            <p>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more.</p>
            <button className="learn1">Learn More ></button>
           </div>
           </div>
            </div>
            <div className="buttonlink">
            <Link>Explore</Link>
            <Link>Learn</Link>
            <Link>Support</Link>
            <Link>About</Link>
            <Link>Help</Link>
            </div>
            <div className="homeimg">
                <div className="subpara">
                <p id="p1">ABOUT</p>
                <span id="p2">Cos Cob Library Renovation</span>
                <p id="p3">Greenwich Library recently announced a new plan for the much-anticipated Cos Cob Branch Library renovation. The revised plan considers ideas raised by the community to expand the community room for greater program capacity, increase space dedicated to children’s services, and enhance the collections to make it a go-to destination. </p>
                <button className="learn2">Learn More ></button>
                </div>
            </div>
            <div className="homeimg2">
                <center id="jan">
                <span>January Events</span>
                <p>These printable one-page calendars for each Greenwich Library branch are fridge-ready.</p>
                <button>Get Printable Calendars ></button>
                </center>
            </div>
            <div className="homeimg1">
                <div className="subpara">
                <p id="p1">EXPLORE</p>
                <span id="p2">Peterson Business Collection</span>
                <p id="p3">Our Peterson Business Collection offers support for job seekers, entrepreneurs, small businesses, and nonprofits. The Library also provides financial literacy resources for individuals of all skill levels. Access our business databases to get started. Make sure to check out our business workshops too! </p>
                <button className="learn2">Learn More ></button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;