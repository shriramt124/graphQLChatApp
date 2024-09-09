 
import { gql } from 'apollo-server-express';


//we make the id mandetory by writing the exclamation behind

const typeDefs = gql`
     type Query {
      users:[User]
      user(id:ID!):User 
      messagesByUser(receiverId:Int!):[Message] 
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
      scalar Date """ this is a scalar type """
      type Message{
            id: ID!
            text: String!
            receiverId: Int!
            senderId: Int!
            createdAt: Date!
      }
      type Mutation{
       signupUser(userNew:UserInput):User
       signInUser(userSignIn:signinInput):Token
       createMessage(receiverId:Int!,text:String!):Message
      }
      type User {

      id:String 
      firstName:String
      lastName:String
      email:String

      }

      type Subscription{
            messageAdded:Message
      }
`

export default typeDefs;
