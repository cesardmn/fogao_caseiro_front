export default class Utils {
  static numberToCurrencyBRL (value: number) {
    return value.toLocaleString(
      'pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  } 
}

