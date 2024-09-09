import {gql} from "@apollo/client"


export const SIGNUP_USER = gql`
mutation SignupUser($userNew: UserInput) {
  signupUser(userNew: $userNew) {
    id
    firstName
    lastName
    email
  }
}
`

export const LOGIN_USER = gql`
mutation SignInUser($userSignIn: signinInput) {
  signInUser(userSignIn: $userSignIn) {
    token
  }
}
`