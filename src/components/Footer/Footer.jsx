import React from 'react';

function Footer({
  year = "2023",
  companyName = "My Stylish LP",
  rightsText = "All rights reserved."
}) {
  return (
    <footer>
      <div className="section-container">
        &copy; {year} {companyName}. {rightsText}
      </div>
    </footer>
  );
}

export default Footer;