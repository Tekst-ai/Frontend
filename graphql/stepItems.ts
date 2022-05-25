import { gql } from '@apollo/client';

export const GET_STEP_ITEMS = gql`
    query {
        steplists {
            data {
                id
                attributes {
                    title
                    step {
                        id
                        title
                        content
                    } 
                }
            }
        }
    }
`