import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
    background-image: url("/static/images/logo_abstract.svg");
    background-repeat: no-repeat;
    background-position: 2rem  -10.43rem;
    background-attachment: local;
    /* background-size: 1087.33px 1754.78px; */
    background-size: cover;
    width: calc(100% + 6rem);
    height: calc(100% + 4rem);
    transform: translate(-3rem, -2rem);
`

// const Background = styled.div`
//     position: absolute;
//     background-position: center -10.43rem;
//     background-repeat: no-repeat;
//     /* background-size: 1087.33px 1754.78px; */
//     /* background-size: cover; */
//     width: 1087.33px;
//     height: 1754.78px;
//     left: 50%;
//     transform: translateX(-50%);
//     top: 0;
//     /* z-index: 0; */
// `

const Title = styled.div`
    padding-top: 6rem;
    padding-bottom: 5rem;
    text-align: center;

    h1 {
        font-size: 4rem;
    }

    p {
        margin-top: 1.25rem;
        font-size: 1.375rem;
    }
`

const HelpCenter: NextPage = () => {
    return (
        <>
            {/* <Background/> */}

            <Container>
                <Title>
                    <h1>Helpcentrum</h1>

                    <p>Hoe kunnen we u helpen?</p>
                </Title>
                <Title>
                    <h1>Helpcentrum</h1>

                    <p>Hoe kunnen we u helpen?</p>
                </Title>
                <Title>
                    <h1>Helpcentrum</h1>

                    <p>Hoe kunnen we u helpen?</p>
                </Title>
                <Title>
                    <h1>Helpcentrum</h1>

                    <p>Hoe kunnen we u helpen?</p>
                </Title>

                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Container>
        </>
    )
  }
  
  export default HelpCenter