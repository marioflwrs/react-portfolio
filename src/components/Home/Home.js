import './Home.scss';

import galogo from '../../assets/images/ga-logo.png';
import inflectralogo from '../../assets/images/inflectra-logo.png';

import Navigation from '../Navigation/Navigation';

const Home = () => {
    return(
        <div className="home-container">
            <Navigation />
            <div className="home-title-container">
               <h2>Skills & Background</h2> 
            </div>

            <section className="section-container inflectra">
                <img src={inflectralogo} alt="inflectra logo" className="inflectra-logo"/>
                <p>React.JS Internship | Sept 2017 - November 2017</p>
            </section>
            
            <section className="section-container">
                <img src={galogo} alt="General Assembly logo" className="ga-logo"/>
                <p>Front-End Web Development 2016 <br /> Bootcamp</p>
            </section>

            
           
        </div>
    );
}

export default Home;