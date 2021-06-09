import './Projects.scss';
import tyler from '../../assets/images/tylerdotcom.png';

import Navigation from '../Navigation/Navigation';

const Projects = () => {
    return(
        <div>
            <Navigation />

            <section className="project-card-container">
                <div className="project-card"><h3>title</h3></div>
                <div className="project-card"><h3>title</h3></div>
                <div className="project-card"><h3>title</h3></div>
                <div className="project-card"><h3>title</h3></div>
            </section>
        </div>
    );
}

export default Projects;