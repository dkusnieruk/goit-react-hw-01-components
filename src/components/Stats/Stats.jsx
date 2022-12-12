import data from '../data/data.json';
import css from '../Stats/stats.module.css';
import PropTypes from 'prop-types';

export const Stats = props => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        {data.map(props => (
          <li
            className={css.profileList}
            style={{
              backgroundColor:
                '#' +
                (0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6),
            }}
          >
            <span className={css.label2}>{props.label}</span>
            <span className={css.percentage}>{props.percentage}%</span>
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
