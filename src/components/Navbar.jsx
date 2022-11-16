import { SVGCalendar } from "../svg/SVGCalendar";
import { SVGProfile } from "../svg/SVGProfile";

export const Navbar = () => {
  //___________________________________________________ Variables

  //___________________________________________________ Functions

  //___________________________________________________ Render

  return (
    <nav
      className="navbar"
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <ul>
        <li>
          <SVGCalendar />
        </li>
        <li>
          <SVGProfile />
        </li>
      </ul>
    </nav>
  );
};
