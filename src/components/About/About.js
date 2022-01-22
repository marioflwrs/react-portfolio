import './About.scss';

const About = () => {
    
    return(
        <div className="about-container">
            <div className="about-article-container">
                <div className="article-container-inner">
                    
                    <p>My journey started in 2016 when I attended General Assembly's Web Development bootcamp course. I solidified my basic knowledge of html, css, sass, bootstrap, javascript, jquery, and then continued on to learn more about newer technologies being used in the webdev industry such as: <strong> React, Node, Express, Axios, REST API's, MongoDB, Heroku. </strong></p>
                    <p>What initially started out as a hobby to help out some friends with the structuring & styling for their websites, soon became a hidden passion that I began to explore.</p>
                    <p>At this moment in my life, I now feel confident and experienced enough for me to put myself out there and seek for opportunities in the field of web development.</p>
                    <p>As a person, I am a natural introvert with an abundance of curiosity. I'm always looking for new ways to be able to solve bugs along with providing reusable code. I am a quick learner, I don't mind working long hours especially when its needed to meet a deadline. </p>

                    <a href="https://docs.google.com/document/d/1HQXEpHidUW1SZT-YyRTVK8y9XxbtEjkheHdUt5HcFco/edit?usp=sharing" target="_blank" rel="noreferrer"><h2 className="resume-style">resume.</h2></a>
                </div>
            </div>
        </div>
    );
}

export default About;