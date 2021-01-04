export default class DB {

  static setDB(data) {
    const fcdb = JSON.stringify(data)
    localStorage.setItem("fcdb", fcdb)
  }

  static getDB() {
    return JSON.parse(localStorage.getItem("fcdb") || '[]')
  }
}
