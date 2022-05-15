import type { NextPage } from 'next'
import styled from 'styled-components'

import { Colors } from '../../variables'

const TitleContainer = styled.div`
    p {
        margin-top: 0.625rem;
        color: ${Colors.textGrey};
    }
`

const Configuration: NextPage = () => {
    return (
        <div>
            <TitleContainer>
                <h1>Configuration</h1>

                <p>Kies een accent kleur of verander het thema</p>
            </TitleContainer>
        </div>
    )
  }
  
  export default Configuration