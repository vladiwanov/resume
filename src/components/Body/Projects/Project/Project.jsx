import React from 'react';
import s from './Project.module.scss';
import Content from 'components/Body/Content';

export default function Project({ content }) {
  return (
    <ul className={s.list}>
      {content.map(item => (
        <li key={item.id}>
          <div className={s.content}>
            {/* ✅  вариант вывода данных через неявное задание ... */}
            <h3 className={`${s.subtitle} ${s.projectTitle}`}>{Object.keys(item)[0]}:</h3>
            <p className={s.item}>{Object.values(item)[0]}</p>
          </div>
          <div className={s.projectContent}>
            <div className={s.content}>
              <h3 className={s.subtitle}>{Object.keys(item)[1]}:</h3>
              <a className={`${s.item} ${s.link}`} href={Object.values(item)[1]} target="_blank" rel="noreferrer">
                {Object.values(item)[1]}
              </a>
            </div>
            <div className={s.content}>
              {/*✅  вариант выода данных через явное задание текста */}
              <h3 className={s.subtitle}> about Project: </h3>
              <p className={s.item}>{Object.values(item)[2]}</p>
            </div>
            <div className={s.content}>
              <h3 className={s.subtitle}>used technologies:</h3>
              <Content content={Object.values(item)[3]} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
