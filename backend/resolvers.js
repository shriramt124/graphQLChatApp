import { PrismaClient } from '@prisma/client'
import { ApolloError, AuthenticationError, ForbiddenError } from "apollo-server-express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import {PubSub} from "graphql-subscriptions"
const prisma = new PrismaClient()
 
const pubsub = new PubSub();
const MESSAGE_ADDED = `MESSAGE_ADDED`



const resolvers = {
    Query: {
        users: async (parent, args, { userId }) => {
            console.log(userId)
            if (!userId) {
                throw new ForbiddenError("You must be logged in to view this page")
            }
            const users = await prisma.user.findMany({
                where: {
                    id: {
                        not: userId//we will get all the loggedout User
                    }
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
            return users;
        },
        messagesByUser: async (parent, { receiverId }, { userId }) => {
            if (!userId) {
                throw new ForbiddenError("You must be logged in to view this page")
            }
            const messages = await prisma.message.findMany({
                where: {
                    OR: [
                        {//it will send the messages that has been sent to receiver
                            receiverId: receiverId,
                            senderId: userId
                        },
                        {//it will send the message that the reciever sent to me 
                            receiverId: userId,
                            senderId: receiverId

                        }
                    ]
                },
                orderBy: {
                    createdAt: "asc"
                }


            })
            return messages;
        }

    },

    Mutation: {
        signupUser: async (parent, { userNew }, context) => {
            console.log(userNew);
            const user = await prisma.user.findUnique({
                where: {
                    email: userNew.email
                }
            })
            if (user) {
                throw new AuthenticationError("User already exists with that email ")
            }
            //hash the password
            const hashedPassword = await bcrypt.hash(userNew.password, 10)
            const newUser = await prisma.user.create({
                data: {
                    ...userNew,
                    password: hashedPassword
                }
            })
            return newUser;
        },
        signInUser: async (parent, { userSignIn }, context) => {
            const user = await prisma.user.findUnique({
                where: {
                    email: userSignIn.email
                }
            })
            if (!user) {
                throw new AuthenticationError("User does not exist with that email")
            }
            const isPasswordCorrect = await bcrypt.compare(userSignIn.password, user.password)
            if (!isPasswordCorrect) {
                throw new AuthenticationError("Password is incorrect")
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            })

            return {
                token
            }
        },
        createMessage: async (_, { receiverId, text }, { userId }) => {
            if (!userId) {
                throw new ForbiddenError("You must be logged in to view this page")
            }
            const message = await prisma.message.create({
                data: {
                    text,
                    receiverId,
                    senderId: userId
                }
            })
            pubsub.publish(MESSAGE_ADDED,{messageAdded:message})
            return message;
        }
    },
    Subscription:{
        messageAdded:{
        subscribe:()=>pubsub.asyncIterator(MESSAGE_ADDED)
        }
    }
}

export default resolvers;
