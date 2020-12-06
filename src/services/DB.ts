

export default class DB {

  static setDB(data: JSON) {
    const fcdb = JSON.stringify(data)
    localStorage.setItem("fcdb", fcdb)
  }

  static getDB() {
    return JSON.parse(localStorage.getItem("fcdb") || '{}')
  }

  static getInfo(type: string) {
    const db = this.getDB()
    return db.info[type]
  }

  static getLunch(lunch: string) {
    const db = this.getDB()
    const choices = db.products.lunches[`${lunch}s`]

    return  {
      title: choices[0].title,
      choices: 
        {
          name: choices[0].title,
          choice_amount: 5,
          items: choices
        }
    }
  }

  static getCombo(id: string) {
    const combo = this.getCombos()[Number(id) - 1]
    return  {
      title: combo.title,
      choices: combo.portions
    }
  }


  static getCombos() {
    const db = this.getDB()
    return db.products.combos
  }

}

