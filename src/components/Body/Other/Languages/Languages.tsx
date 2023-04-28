import React from 'react';
import Content from 'components/Body/Content';
import s from './Languages.module.scss';
import languages from 'db/languages.json';

export default function Languages() {
  return (
    <div className={`${s.content} ${s.languages}`}>
      <h2 className={s.title}> Languages</h2>
      <Content content={languages} />
    </div>
  );
}
