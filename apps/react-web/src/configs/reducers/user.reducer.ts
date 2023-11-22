import { Role } from '@helix-ai/entities-enums'

interface User {
  user_name: string
  email: string
  role: Role
}

const initialUser: User = {
  email: '',
  role: Role.User,
  user_name: '',
}

export const UserReducer = (user = initialUser, action: any) => {
  switch (action.type) {
    case '1': {
      return user
    }
    default: {
      return user
    }
  }
}
