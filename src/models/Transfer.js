import { Movement } from './Movement';

export class Transfer extends Movement {
  constructor(data) {
    super(data);
    this.isIncoming = data.isIncoming || false;
  }

  getNetAmount() {
    return this.isIncoming ? Math.abs(this.amount) : -Math.abs(this.amount);
  }

  getColor() {
    return '#3b82f6';
  }

  getIcon() {
    return '⇄';
  }

  getTypeName() {
    return this.isIncoming ? 'Transferencia Recibida' : 'Transferencia Enviada';
  }
}
