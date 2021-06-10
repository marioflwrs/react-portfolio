import React, { useState, useRef, useEffect} from 'react';
import './Projects.scss';
//import tyler from '../../assets/images/tylerdotcom.png';

import Navigation from '../Navigation/Navigation';



const FadeInSection = ({
    children,
  }) => {
    const domRef = useRef();
    
    const [isVisible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // Observe:     
        if (entries[0].isIntersecting) {
        
          //Set visibility:
          setVisible(true);

        }
      });
      
      observer.observe(domRef.current);
      
    }, []);
  
    return (<section ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ children }</section>);
  };

const Projects = () => {
     const projectItems = [1, 2, 3, 4, 5].map(number => (
         <FadeInSection key={ number }>Section {number}</FadeInSection>
     ));

    return(
        <div>
            <Navigation />
            { projectItems }
            
        </div>
    );
}

export default Projects;