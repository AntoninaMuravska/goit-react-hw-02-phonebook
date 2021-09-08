import React from 'react';
import s from './Filter.module.css';

const Filter = () => {
  return (
    <label className={s.label}>
      <span className={s.span}>Find contacts by name</span>
      <input type="text" className={s.input} />
    </label>
  );
};

export default Filter;
