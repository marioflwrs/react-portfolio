import React, { useState, useRef, useEffect} from 'react';
import "./Work.scss";


const Work = () => {
  const ProjectCards = [
        {
          title: "TYLERBILLINGER",
          description: "React, Sass, Heroku, Google SEO",
          url: "//www.tylerbillinger.com",
          key: 1
        },
      
        {
          title: "MARIOBALLE",
          description: "React, React Hooks, SASS, Github Pages",
          url: "//www.github.com/marioflwrs/react-portfolio/tree/2022portfolio",
          key: 2
        },
      
        {
          title: "CYPHERBREAK (Event creator / user login /registration)",
          description: "MERN Stack application: Created a simple CRUD application using MongoDB, Express, React, and Node.js that can register and login users through a RESTful API.",
          url: "//mernstack-cypherbreak-jam.herokuapp.com/",
          key: 3
        },
      
        {
          title: "Pokemon API",
          description: "ReactJS, Axios, Sass - built a simple website that allows users to search the 1st gen pokemon and to see their poke-details.",
          url: "https://pokemon-api-practice.netlify.app/",
          key: 4
        }
      
      ]

    const FadeInSection = ({ children, }) => {
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

  const projectItems = ProjectCards.map((data) => (
    <a href={data.url} key={ data.key } target="_blank" rel="noreferrer">
      <FadeInSection> 
        <h1 className="project-title-style">{data.title}</h1> 
        <p className="project-description-style">{data.description}</p>  
      </FadeInSection>
    </a>
  ));
  return(
    <div className="work-container">
      <div className="work-inner-container">
        
        <div className="projects-container">
          {projectItems}
        </div>
      </div>
    </div>
  );
}

export default Work;














































































// import React, { useState, useRef, useEffect} from 'react';
// import './Projects.scss';
// //import tyler from '../../assets/images/tylerdotcom.png';



// const Projects = () => {

//   const ProjectCards = [
//     {
//       title: "TYLERBILLINGER.COM",
//       description: "React.JS, Sass, Heroku, Google SEO",
//       url: "//www.tylerbillinger.com",
//       key: 1
//     },
  
//     {
//       title: "MARIOBALLE.COM",
//       description: "React.js & Sass",
//       url: "//www.google.com",
//       key: 2
//     },
  
//     {
//       title: "title 3",
//       description: "description 3",
//       url: "//www.twitch.tv",
//       key: 3
//     },
  
//     {
//       title: "title 4",
//       description: "description 4",
//       url: "//www.viz.com",
//       key: 4
//     },
  
//     {
//       title: "title 5",
//       description: "description 5",
//       url: "//www.npr.com",
//       key: 5
//     },
  
//   ]

//   const FadeInSection = ({ children, }) => {

//     // const [currCard, setCurrCard] = useState(0);
    
//     const domRef = useRef();
    
//     const [isVisible, setVisible] = useState(false);
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(entries => {
//         // Observe:     
//         if (entries[0].isIntersecting) {
        
//           //Set visibility:
//           setVisible(true);

//           //Set Cards
//           // setCurrCard(currCard + 1);

//         }
//       });
      
//       observer.observe(domRef.current);
      
//     }, []);
  
//     return (<section ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ children }</section>);
//   };

//   const projectItems = ProjectCards.map((data) => (
//     <a href={data.url} key={ data.key } target="_blank" rel="noreferrer"><FadeInSection className="fadein-style"> 
//       <h1 className="project-title-style">{data.title}</h1> 
//       <p className="project-description-style">{data.description}</p>  
//     </FadeInSection></a>
//   ));

//   return(
//       <div>
//           { projectItems }
//       </div>
//   );
// }

// export default Projects;