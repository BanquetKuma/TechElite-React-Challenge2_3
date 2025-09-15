import React from 'react';
import styles from './Footer.module.css'; // CSS Modulesをインポート

function Footer({
  year = "2023",
  companyName = "My Stylish LP",
  rightsText = "All rights reserved."
}) {
  return (
    <footer className={styles.footer}>
      <div className="section-container">
        &copy; {year} {companyName}. {rightsText}
      </div>
    </footer>
  );
}

export default Footer;