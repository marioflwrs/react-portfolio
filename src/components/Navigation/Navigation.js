import './navigation.scss';
import marioprofile from '../../assets/mario-side.png';

export default function Navigation() {
  return (
    <div className="nav-container">
      <div className="profile-container">
        <img className="profile-picture" src={marioprofile} alt="my face" />
        <span>Mario Ballesteros</span>
        <span>Brookly, NY</span>
      </div>      
    </div>
  )
}
