
const Exercise = {
  id: 0,
  name: '',
  creator: '',
  description: '',
  instructions: '',
  permissions: {
    write: false,
    read: false
  },
  programs: []
}
export const newExercise = () => Object.assign({}, Exercise)
