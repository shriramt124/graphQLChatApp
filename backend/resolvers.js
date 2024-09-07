import { PrismaClient } from '@prisma/client'
import { ApolloError, AuthenticationError } from "apollo-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()


const resolvers = {
    Query: {
     users:async () => {
        return await prisma.user.findMany()
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
            const hashedPassword = await bcrypt.hash(userNew.password,10)
            const newUser = await  prisma.user.create({
                data: {
                    ...userNew,
                    password:hashedPassword
                }
            })
            return newUser;
        },
        signInUser:async(parent,{userSignIn},context) => {
            const user = await prisma.user.findUnique({
                where:{
                    email:userSignIn.email
                }
            })
            if(!user){
                throw new AuthenticationError("User does not exist with that email")
            }
            const isPasswordCorrect = await bcrypt.compare(userSignIn.password,user.password)
            if(!isPasswordCorrect){
                throw new AuthenticationError("Password is incorrect")
            }
            const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{
                expiresIn:"1d"
            })

            return {
                token
            }
        }
    }
}

export default resolvers;
