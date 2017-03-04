
const Program = {
  id: 0,
  name: '',
  creator: '',
  permissions: {
    read: false,
    write: false
  },
  description: '',
  created: '',
  updated: '',
  routines: []
}
export const newProgram = () => Object.assign({}, Program)
