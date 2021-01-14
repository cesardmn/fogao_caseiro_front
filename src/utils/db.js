import { GroupWorkSharp } from "@material-ui/icons"

export default class DB {

  static setDB(data) {
    const fcdb = JSON.stringify(data)
    localStorage.setItem("fcdb", fcdb)
  }

  static getDB() {
    return JSON.parse(localStorage.getItem("fcdb") || '[]')
  }

  static getGroupNames() {
    const db = this.getDB()

    const names = new Set()

    for (let item of db) {
      names.add(item.group.name)
    }

    return [...names]

  }

  static getGroups() {
    const db = this.getDB()
    const names = this.getGroupNames()

    const groups = []
    for (let name of names) {
      let items = db.filter(item => item.group.name === name)
      let group = items[0].group

      let types = new Set()
      for (let item of items) {
        types.add(item.type.name)
      }

      group['types'] = [...types]
      group['items'] = items
      groups.push(group)
    }

    return groups
  }
}
