export default class Utils {
  static numberToCurrencyBRL (value: number) {
    return value.toLocaleString(
      'pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  }

  static formaterDesciptionCard(value: string) {
    if (value.length > 40) {
      return value.slice(0, 36) + ' ...'
    }else{
      return value
    }
  }
}

