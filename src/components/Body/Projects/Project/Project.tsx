import React from 'react';
import s from './Project.module.scss';
import Content from 'components/Body/Content';

type Prop = {
  Project: string;
  // linkName: string;
  link: string;
  aboutProject: string;
  usedTechnologies: string[];
  id: string;
};
interface Props {
  content: Prop[];
}

export default function Project({ content }: Props) {
  return (
    <ul className={s.list}>
      {content.map(item => (
        <li key={item.id}>
          <div className={s.content}>
            {/* ✅  вариант вывода данных через неявное задание ... */}
            <h3 className={`${s.subtitle} ${s.projectTitle}`}>
              {Object.keys(item)[0]}:
            </h3>
            <p className={s.item}>{Object.values(item)[0]}</p>
          </div>
          <div className={s.projectContent}>
            <div className={s.content}>
              <h3 className={s.subtitle}>{Object.keys(item)[1]}:</h3>
              <a
                className={`${s.item} ${s.link}`}
                // href={Object.values(item)[1]}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {/*{item.linkName}*/}
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
              <Content content={item.usedTechnologies} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
