import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Covoiturage Karshare - Tous droits réservés</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    textAlign: 'center',
    marginTop: 'auto'
  }
};

export default Footer;
