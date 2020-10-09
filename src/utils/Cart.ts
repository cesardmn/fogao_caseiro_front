export default class Cart {

  static getCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')

    if (cart.length < 1) {
      localStorage.setItem('cart', '[]')
      cart = JSON.parse(localStorage.getItem("cart") || '[]')
    }

    return cart
  }

  static setItemIntoCart(item: ItemProps) {

    let cart = this.getCart()

    const itemCart = this.getItemCart(item)

    if (itemCart.length === 0 && item.amount < 10) {
      item.amount += 1
      cart.push(item)
    } else {
      const indexItemCart = this.getIndexItemCart(item)
      if (item.amount < 10) {
        item.amount += 1
      }
      cart[indexItemCart] = item
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }


  static removeItemCart (item: ItemProps){
    let cart = this.getCart()
    const indexItemCart = this.getIndexItemCart(item)
    
    if(item.amount > 1) {
      item.amount -= 1
    }

    cart[indexItemCart] = item    
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  static getItemCart(item: ItemProps) {
    let cart = this.getCart()
    return cart.filter(
      (includeItem: { id: number; type: string }) => {
        return (
          item.id === includeItem.id &&
          item.type === includeItem.type
        )

      }
    )
  }

  static deleteItemCart(item: ItemProps){
    let cart = this.getCart()
    const indexItemCart = this.getIndexItemCart(item)
    cart.splice(indexItemCart, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  static getIndexItemCart(item: ItemProps) {
    let cart = this.getCart()
    return cart.findIndex(
      (includeItem: { id: number; type: string }) => {
        return (
          includeItem.id === item.id &&
          includeItem.type === item.type
        )
      }
    )

  }

  static getTotalCart() {
    const cart = this.getCart()
    return cart.reduce(
      (totalCart: number, item: ItemProps) => {
        return totalCart + item.sale * item.amount
      },
      0
    )
  }

  static deleteCart() {
    localStorage.setItem('cart', '[]')
  }

}
