import { Deposit } from '../models/Deposit';
import { Withdrawal } from '../models/Withdrawal';
import { Transfer } from '../models/Transfer';
import { Payment } from '../models/Payment';
import MovementCard from './MovementCard';
import './MovementList.css';

// TODO: extract creation
function createMovement(data) {
  switch (data.type) {
    case 'deposit':
      return new Deposit(data);
    case 'withdrawal':
      return new Withdrawal(data);
    case 'transfer':
      return new Transfer(data);
    case 'payment':
      return new Payment(data);
    default:
      throw new Error(`Unknown movement type: ${data.type}`);
  }
}

function MovementList({ movementsData }) {
  const movements = movementsData.map(data => createMovement(data));

  const totalBalance = movements.reduce((sum, m) => sum + m.getNetAmount(), 0);

  const formatBalance = (amount) => {
    const isPositive = amount >= 0;
    const formatted = Math.abs(amount).toLocaleString('es-HN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `${isPositive ? '+' : '-'} L ${formatted}`;
  };

  return (
    <div className="movement-list-container">
      <div className="balance-summary">
        <span className="balance-label">Balance Neto</span>
        <span className={`balance-amount ${totalBalance >= 0 ? 'positive' : 'negative'}`}>
          {formatBalance(totalBalance)}
        </span>
      </div>
      <div className="movement-list">
        {movements.map(movement => (
          <MovementCard key={movement.id} movement={movement} />
        ))}
      </div>
    </div>
  );
}

export default MovementList;
