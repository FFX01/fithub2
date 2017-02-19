
const User = {
  id: 0,
  username: '',
  email: '',
  bio: '',
  date_joined: '',
  createdExercises: [],
  permissions: {
    read: false,
    write: false
  }
}
export const newUser = () => Object.assign({}, User)
