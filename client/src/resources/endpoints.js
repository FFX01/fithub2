
export const userEndpoints = {
  signUp: '/auth/sign-up/',
  signIn: '/auth/sign-in/',
  list: '/users/',
  detail(userId) {
    return `/users/${userId}/`
  },
  authUser: '/auth/me/'
}

export const exerciseEndpoints = {
  list: '/exercises/',
  detail(exerId) {
    return `/exercises/${exerId}/`
  }
}

export const programEndpoints = {
  list: '/programs/',
  detail(id) {
    return `/programs/${id}/`
  }
}

export const routineEndpoints = {
  list: '/routines/',
  detail(id) {
    return `/routines/${id}/`
  }
}
