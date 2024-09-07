 
import typeDefs from './typeDef.js';
import resolvers from './resolvers.js'
import { ApolloServer } from 'apollo-server';

;
//to share the data between the resolvers the context comes into contact 

const server = new ApolloServer({
    typeDefs, resolvers, context: {
        usersLoggedIn: true
    }
});

server.listen().then(({ url }) => {
    console.log(`Server is running at ${url}`);
})