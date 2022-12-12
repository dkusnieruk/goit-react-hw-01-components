import data from '../data/data.json';
import css2 from '../Stats/stats.module.css';
import PropTypes from 'prop-types';

export const Stats = props => {
  return (
    <section className={css2.statistics}>
      <h2 className={css2.title}>Upload stats</h2>

      <ul className={css2['stat-list']}>
        {data.map(props => (
          <li
            className={css2.profileList}
            style={{
              backgroundColor:
                '#' +
                (0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6),
            }}
          >
            <span className={css2.label2}>{props.label}</span>
            <span className={css2.percentage}>{props.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  label: PropTypes.number,
  percentage: PropTypes.number,
};
