import { useState } from 'react';
import styles from './DomainSelector.module.sass';
import DomainOptionButton from './DomainOptionButton';

const domainOptions = [
  {
    label: 'Yes',
    description: 'But minor variations are allowed',
    recommended: true,
  },
  {
    label: 'Yes',
    description: 'The Domain should exactly match the name',
    recommended: false,
  },
  {
    label: 'No',
    description: 'I am only looking for a name, not a Domain',
    recommended: false,
  },
];

const DomainSelector = ({ onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = index => {
    setActiveIndex(index);
    onChange?.(domainOptions[index]);
  };

  return (
    <div className={styles.selectorWrapper}>
      {domainOptions.map((option, i) => (
        <DomainOptionButton
          key={i}
          label={option.label}
          description={option.description}
          recommended={option.recommended}
          isActive={i === activeIndex}
          onSelect={() => handleSelect(i)}
        />
      ))}
    </div>
  );
};

export default DomainSelector;
