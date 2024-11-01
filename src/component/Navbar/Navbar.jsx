import "./Navbar.css";
import Fire from '../../assets/fire.jpg';
import Star from '../../assets/glowingstar.png';
import Party from '../../assets/partyface.jpg';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moviemoniac</h1>

      <div className="navbar_links">
        <a href="#popular">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming <img src={Party} alt="party face emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


