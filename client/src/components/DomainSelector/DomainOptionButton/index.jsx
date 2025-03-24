import React from 'react';
import classNames from 'classnames';
import styles from './DomainOptionButton.module.sass';

const DomainOptionButton = ({
  label,
  description,
  recommended,
  isActive,
  onSelect,
}) => (
  <div
    className={classNames(styles.optionButton, { [styles.active]: isActive })}
    data-recommended={recommended}
    onClick={onSelect}
  >
    <strong>{label}</strong>
    <p>{description}</p>
  </div>
);

export default DomainOptionButton;
