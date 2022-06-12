import { gql } from '@apollo/client';

export const GET_FAQ_ITEMS = gql`
    query {
        faqs {
            data {
                id
                attributes {
                    question
                    Answer 
                }
            }
        }
    }
`