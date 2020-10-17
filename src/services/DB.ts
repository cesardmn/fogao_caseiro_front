export default class DB {

  static setDB(data: JSON) {
    const fcdb = JSON.stringify(data)
    localStorage.setItem("fcdb", fcdb)
  }

  static getDB() {
    return JSON.parse(localStorage.getItem("fcdb") || '{}')
  }

  static getInfo(type: string){
    const db = this.getDB()
    return db.info[type]
  }

  
}
