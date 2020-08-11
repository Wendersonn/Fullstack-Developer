import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {
  negative = false;
  transform(value: any, args?: any, decimal?: any): any {
    if (!value) value = 0
    value < 0 ? (this.negative = true) : false;
    value = Math.abs(value);
    const money = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      // minimumSignificantDigits : decimal || 2,
    });
    if (this.negative) {
      let result = money.split('$')
      this.negative = false;
      return `${result[0]}$ -${result[1].slice(1)}`
    }
    return money;
  }

}
