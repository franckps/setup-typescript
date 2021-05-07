export class User {
    name
    login
    private password
    constructor (name: String, login: String, password: String) {
      this.name = name
      this.login = login
      this.password = password
    }

    test () {
      console.log(`Saviying user ${this.name} wait a minut...`)
    }
}
