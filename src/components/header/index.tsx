import { NAV_LIST_DATA } from "../../configs/navListData";
import { PiCaretDownBold } from "react-icons/pi";
import "../../index.css";
import { useState } from "react";

const Header = () => {
  const [selectedNavItemName, setSelectedNavItemName] = useState<string>("");

  return (
    <>
      <nav>
        <ul>
          {NAV_LIST_DATA.map((item) => (
            <li
              onMouseEnter={() => setSelectedNavItemName(item.label)}
              onMouseLeave={() => setSelectedNavItemName("")}
              key={item.label}
              className="header__navItem"
            >
              <a>
                {item.label} <PiCaretDownBold className="header__icon--down" />
              </a>

              <div style={{ display: selectedNavItemName ? "grid" : "none" }}>
                {}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
