import UserModel from '@models/UserModel'

describe('Save user data', () => {
  it('should be able to save a new user', async () => {
    const userModel = new UserModel()
    const userWasCreated = await userModel.save({
      name: 'Francisco Pereira',
      login: 'francisco',
      password: 'FFps'
    })
    const usersCreated = await userModel.find()

    expect(userWasCreated).toEqual(true)
    expect(usersCreated).toEqual(expect.arrayContaining([
      expect.objectContaining({
        name: 'Francisco Pereira',
        login: 'francisco',
        password: 'FFps'
      })
    ]))
  })

  it('should not be able to duplicate user login', async () => {
    const userModel = new UserModel()
    await userModel.save({
      name: 'Francisco Pereira',
      login: 'francisco',
      password: 'FFps'
    })
    const notSavedUser = await userModel.save({
      name: 'Francisco Pereira',
      login: 'francisco',
      password: 'FFps'
    })
    const usersCreated = await userModel.find()
    expect(notSavedUser).toEqual(false)
    expect(usersCreated.length).toEqual(1)
  })
})

describe('Find user data', () => {
  it('Should be able to  get all users', async () => {
    const userModel = new UserModel()
    await userModel.save({
      name: 'Francisco Pereira',
      login: 'francisco',
      password: 'FFps'
    })
    await userModel.save({
      name: 'Francisco Pereira',
      login: 'francisco',
      password: 'FFps'
    })
    userModel.find()
  })
})
