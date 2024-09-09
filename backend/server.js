
import typeDefs from './typeDef.js';
import resolvers from './resolvers.js'
import { ApolloServer } from 'apollo-server-express';
import jwt from "jsonwebtoken";
import { WebSocketServer } from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
const port  = process.env.PORT || 4000;

const app = express();
const context = ({ req }) => {
    const { authorization } = req.headers
    if (authorization) {
        const { userId } = jwt.verify(authorization, process.env.JWT_SECRET)
        return { userId };
    }
}
const schema = makeExecutableSchema({typeDefs,resolvers});
 
const apolloServer = new ApolloServer({ schema, context })
await apolloServer.start();
apolloServer.applyMiddleware({app,path:"/graphql"})
const server =app.listen(port,()=>{
    const wsServer = new WebSocketServer({
        server,
        path: '/graphql',
    });

    useServer({ schema }, wsServer);
    console.log("apollo and Subscription server is up ");
})

 
 
 

//to share the data between the resolvers the context comes into contact
//context acts as a middleare
//before request reaches to the resolver they passes to the resolver

// const server = new ApolloServer({
//     typeDefs, resolvers, context: ({ req }) => {
//         const { authorization } = req.headers
//         if (authorization) {
//             const { userId } = jwt.verify(authorization, process.env.JWT_SECRET)
//             return {userId};
//         }
//     }
// });

// server.listen().then(({ url }) => {
//     console.log(`Server is running at ${url}`);
// })