export default class DB{

  static getDB() {
    return JSON.parse(localStorage.getItem("fcdb") || '{}')
  }

  static getItem(item: string) {
    const db = this.getDB()
    return db[item]
  }
}