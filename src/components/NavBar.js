import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      <ul>
        {/* using map to create a new array of JSX elements */}
        {links.map((link, index) => (
          <div key={index} className="nav-link">
            <a href={`#${link}`}>{link} </a>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
