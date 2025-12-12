import './MovementCard.css';

function MovementCard({ movement }) {
  const netAmount = movement.getNetAmount();
  const isPositive = netAmount >= 0;

  const formatAmount = (amount) => {
    const formatted = Math.abs(amount).toLocaleString('es-HN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `${isPositive ? '+' : '-'} L ${formatted}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-HN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="movement-card" style={{ borderLeftColor: movement.getColor() }}>
      <div className="movement-icon" style={{ backgroundColor: movement.getColor() }}>
        {movement.getIcon()}
      </div>
      <div className="movement-details">
        <span className="movement-type">{movement.getTypeName()}</span>
        <span className="movement-description">{movement.description}</span>
        <span className="movement-date">{formatDate(movement.date)}</span>
      </div>
      <div className={`movement-amount ${isPositive ? 'positive' : 'negative'}`}>
        {formatAmount(netAmount)}
      </div>
    </div>
  );
}

export default MovementCard;
