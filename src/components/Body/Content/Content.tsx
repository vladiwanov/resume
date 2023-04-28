import React from 'react';
import s from './Content.module.scss';

type Prop1 = {
  Project: string;
  link: string;
  aboutProject: string;
  usedTechnologies: string[];
  id: string;
};
type Langs = { English: string } | { Russian: string } | { Ukrainian: string };
interface Props {
  content: string[] | Prop1[] | Langs[];
}

const Content = ({ content }: Props) => (
  <ul className={`${s.list} ${s.item}`}>
    {content.map((item, i) =>
      typeof item === 'object' ? (
        <li className={s.item} key={i}>
          {Object.keys(item)} : {Object.values(item)}
        </li>
      ) : (
        <li className={s.listItem} key={i}>
          {item}
        </li>
      ),
    )}
  </ul>
);

export default Content;
