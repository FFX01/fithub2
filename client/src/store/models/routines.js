
const routine = {
  id: 0,
  name: '',
  order: 0,
  created: '',
  updated: '',
  creator: '',
  program: '',
  permissions: {
    write: false,
    read: false
  },
  set_groups: []
}

export const newRoutine = () => Object.assign({}, routine)
