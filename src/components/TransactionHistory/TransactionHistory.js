import PropTypes from 'prop-types';
import s from './Transactions.module.css';

function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th className={s.tTitle}>Type</th>
          <th className={s.tTitle}>Amount</th>
          <th className={s.tTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.tString} key={item.id}>
            <td className={s.tItem}>{item.type}</td>
            <td className={s.tItem}>{item.amount}</td>
            <td className={s.tItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
