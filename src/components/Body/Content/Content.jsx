import React from 'react';
import s from './Content.module.scss';

const Content = ({ content }) => (
    <ul className={`${s.list} ${s.item}`}>
      {content.map(item =>
        typeof item === 'object' ? (
          <ContentForObjects item={item} />
        ) : (
          <ContentForItems item={item} />
        ),
      )}
    </ul>
  );


const ContentForItems = ({ item }) => (
  <li className={s.listItem} key={item.id || item}>
    {item}
  </li>
);

const ContentForObjects = ({ item }) => (
  <li className={s.item} key={item.id || Object.keys(item)}>
    {Object.keys(item)}: {Object.values(item)}
  </li>
);

export default Content;