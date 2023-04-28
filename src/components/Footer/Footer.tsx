import React from 'react';
import s from './Footer.module.scss';
import footer from 'db/footer.json';

export default function Footer() {
  return (
    <>
      <p className={`${s.item} ${s.footerItem}`}>{footer[0]}</p>
    </>
  );
}
