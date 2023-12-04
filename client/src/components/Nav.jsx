import sun_icon from "./../assets/sun-svgrepo-com.svg";
import moon_icon from "./../assets/moon-1247-svgrepo-com.svg";
import "./../styles/Nav_styles.css"
import Switch from '@mui/material/Switch';

export const Nav = () => {
  return (
      <nav>
        <section className="nav_section">
          <div className="nav_img">
            <img src={sun_icon} alt="light_mode"/>
          </div>
          <div className="switch">
            <Switch defaultChecked color="default"/>
          </div>
          <div className="nav_img">
            <img src={moon_icon} alt="dark_mode"/>
          </div>
        </section>
      </nav>
  );
}