interface IUserData {
    name: String,
    login: String,
    password: String
}

const bd: [IUserData?] = []

export default class UserModel {
  async save (userData: IUserData): Promise<Boolean> {
    let exists = false
    bd.forEach(element => {
      if (element.login === userData.login) { exists = true; return true }
    })
    if (exists) return false

    bd.push(userData)
    return true
  }

  async find (): Promise<[IUserData?]> {
    return bd
  }
}
