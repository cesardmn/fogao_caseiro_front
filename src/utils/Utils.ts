import DB from "./DB"

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

  static getLinkItem() {
    

    const uri = (window.location.href)
      .split('/')
      .slice(-2)[1]

    return uri
    
  }

  static getCombo(){
    const comboId = Number((window.location.href)
    .split('/')
    .slice(-2)[1])
    return DB.getItem('combos')[comboId -1]
  }
}

