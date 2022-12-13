import transactions from '../data/transactions.json';
import PropTypes from 'prop-types';
import css from '../TransactionHistory/transactionHistory.module.css';

export const TransactionHistory = props => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(props => (
          <tr className={props.id}>
            <td>{props.type}</td>
            <td>{props.amount}</td>
            <td>{props.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};
