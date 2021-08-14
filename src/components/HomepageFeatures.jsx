import React from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    size: 4,
    title: 'Open source',
    description: (
      <>
        Everything that make up the bot can be found on{' '}
        <a target="_" href="https://github.com/llama-bot">
          Github
        </a>
        . You can even clone and host it yourself!
      </>
    ),
  },
  {
    size: 6,
    title: '102% Free',
    description: (
      <>
        Llama bot is not just free as in free ice cream, but also free as in
        freedom. Every part of the bot is licensed under the{' '}
        <a target="_" href="https://opensource.org/licenses/MIT">
          MIT License
        </a>{' '}
        so you are free to do whatever your hart desires!
      </>
    ),
  },
  {
    size: 4,
    title: 'Easy to use',
    description: (
      <>
        ✔️ Simple
        <br />
        ✔️ Modern
        <br />
        ✔️ Extendable
        <br />
        ✔️ Well documented
      </>
    ),
  },
];

function Feature({ size, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <FontAwesomeIcon
          icon={faStar}
          className={styles.featureSvg}
          alt={title}
          style={{ fontSize: `${size}rem` }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
