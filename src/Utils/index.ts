export default class Utils {
  static numberToCurrencyBRL(value: number) {
    return value.toLocaleString(
      'pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  }

  static getCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || '[]')
    JSON.stringify(cart) === '[]' && localStorage.setItem("cart", '[]')
    return cart
  }

  static setItemIntoCart(item: any) {
    const cart = this.getCart()
    const newCart = JSON.stringify([item, ...cart])
    localStorage.setItem("cart", newCart)
  }
}
