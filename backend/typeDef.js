 
import { gql } from 'apollo-server';


//we make the id mandetory by writing the exclamation behind

const typeDefs = gql`
     type Query {
      users:[User]
      user(id:ID!):User  
     }

      input UserInput{
      firstName:String!
      lastName:String!
      email:String!
      password:String!
      }
      input signinInput{
      email:String
      password:String
      }
      type Token{
      token:String!
      }
      type Mutation{
       signupUser(userNew:UserInput):User
       signInUser(userSignIn:signinInput):Token
      }
      type User {
      id:String 
      firstName:String
      lastName:String
      email:String
      }
`

export default typeDefs;
