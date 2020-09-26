export default class DB{

  static getDB() {
    return JSON.parse(localStorage.getItem("fcdb") || '{}')
  }

  static getItems(item: string) {
    const db = this.getDB()
    const dbItem = db[item]
    return dbItem.filter((item: ItemProps['item']) => item.hot === true )
  }

  static getItem(item: string) {
    const db = this.getDB()
    return db[item]
  }
}

