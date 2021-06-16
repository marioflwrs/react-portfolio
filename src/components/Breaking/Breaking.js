import Logo from "../Logo/Logo";
import './Breaking.scss';

const Breaking = () => {  

  return(
      <div className="breaking-container">
        <div className="breaking-content-container">
          <div className="content-inner-container">
            <Logo />
            <h1 className="break-title">Breakin'</h1>
            <video autoPlay loop muted poster="https://media.giphy.com/media/YBYEK0ZDeEmv9LrlYm/giphy.mp4">
              <source src="https://media.giphy.com/media/YBYEK0ZDeEmv9LrlYm/giphy.mp4" />
            </video>
            <p className="video-caption">Redbull BC One Finalist - New York Cypher</p>

            <h2>Dancing for 10+ years I have competed on an international level and am known within the breakin' community as 'Flowers' of the legendary lionz of zion crew.</h2>


          </div>


        </div>
      </div>
  );
}

export default Breaking;