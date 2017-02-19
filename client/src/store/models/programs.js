
const Program = {
  id: 0,
  name: '',
  creator: '',
  exercises: [],
  permissions: {
    read: false,
    write: false
  },
  description: '',
  created: '',
  updated: ''
}
export const newProgram = () => Object.assign({}, Program)
