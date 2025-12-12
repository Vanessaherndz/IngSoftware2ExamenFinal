import { Movement } from './Movement';

export class Deposit extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return Math.abs(this.amount);
  }

  getColor() {
    return '#22c55e';
  }

  getIcon() {
    return '↓';
  }

  getTypeName() {
    return 'Depósito';
  }
}
