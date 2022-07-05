import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.marketing}>
        <div className={styles['marketing__contacto']}>
          <h2>Contacto</h2>
          <a href="mailto:ivan.gutierrezc92@gmail.com">ivan.gutierrezc92@gmail.com</a>
          <p>Tel: +569 99181472</p>
        </div>
        <div className={styles['marketing__social']}>
          <h2>Encuentrame también en:</h2>
          <div className={styles['marketing__social-icons']}>
            <a href="https://github.com/llamafluida" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-gutierrez-castro/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
          </div>
        </div>
      </div>
      <div>Creado por Iván Gutiérrez Castro, 2022</div>
    </footer>
  );
};

export default Footer;
