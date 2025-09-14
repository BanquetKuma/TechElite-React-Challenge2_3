import React from 'react';

function Header({
  logoText = "My Stylish LP",
  navItems = [
    { href: "#hero", text: "ホーム" },
    { href: "#features", text: "特徴" },
    { href: "#testimonials", text: "お客様の声" },
    { href: "#contact", text: "お問い合わせ" }
  ]
}) {
  return (
    <header>
      <div className="header-container">
        <div className="logo">{logoText}</div>
        <nav>
          <div className="hamburger">☰</div>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;