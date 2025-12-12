import { Movement } from './Movement';

export class Payment extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#f97316';
  }

  getIcon() {
    return '💳';
  }

  getTypeName() {
    return 'Pago';
  }
}
