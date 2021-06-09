//Components
import Navigation from '../Navigation/Navigation';

//Style
import './Home.scss';

//Images
import galogo from '../../assets/images/ga-logo.png';
import inflectralogo from '../../assets/images/inflectra-logo.png';


const Home = () => {
    return(
        <div className="home-container">
            <Navigation />
            <p>I'm a breakdancing web developer!<br/> I love to spin on my head and create fully functioning websites using React.</p>

            <div className="skills-container">                
                <div className="home-title-container">
                    <h2><strong>Experience</strong></h2> 
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
        </div>
    );
}

export default Home;