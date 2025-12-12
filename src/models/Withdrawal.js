import { Movement } from './Movement';

export class Withdrawal extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#ef4444';
  }

  getIcon() {
    return '↑';
  }

  getTypeName() {
    return 'Retiro';
  }
}
