import { PropTypes } from 'prop-types';
import css from '../transactionHistory/TransactionHistory.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        {items.map(items => (
          <tbody key={items.id}>
            <tr>
              <td>{items.type}</td>
              <td>{items.amount}</td>
              <td>{items.currency}</td>
            </tr>
          </tbody>
        ))}
      </thead>
    </table>
  );
};

Transactions.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
