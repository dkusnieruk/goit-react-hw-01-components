import transactions from '../data/transactions.json';
import PropTypes from 'prop-types';
import css4 from '../Transactions/transaction.module.css';

export const Transaction = props => {
  return (
    <table className={css4['transaction-history']}>
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

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};
