import PropTypes from 'prop-types';
import css from '../statistics/Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {stats.map(stats => (
          <li key={stats.id} className={css.item}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
