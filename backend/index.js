
import typeDefs from './typeDef.js';
import resolvers from './resolvers.js'
import { ApolloServer } from 'apollo-server';
import jwt from "jsonwebtoken"
    ;
//to share the data between the resolvers the context comes into contact 
//context acts as a middleare 
//before request reaches to the resolver they passes to the resolver

const server = new ApolloServer({
    typeDefs, resolvers, context: ({ req }) => {
        const { authorization } = req.headers
        if (authorization) {
            const { userId } = jwt.verify(authorization, process.env.JWT_SECRET)
            return {userId};
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`Server is running at ${url}`);
})