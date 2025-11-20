'use client';
import { useState } from 'react';
import styles from './burgermenu.module.scss';

export default function BurgerMenu({ links }: { links: string[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        className={styles.burger + (menuOpen ? ' ' + styles.burger_active : '')}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label='Открыть меню'
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul className={`${styles.menu} ${menuOpen ? styles.menu_active : ''}`}>
          {links.map((link, idx) => (
            <li
              className={styles.menu__item}
              key={idx}
              onClick={() => {
                const target = document.getElementById(link.toLowerCase());
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
                setMenuOpen(false);
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
