import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CheckEnv } from '../services/checks';

const client = new ApolloClient({
    uri: CheckEnv(process.env.NEXT_PUBLIC_CMS_ENDPOINT),
    cache: new InMemoryCache(),
})

export default client;