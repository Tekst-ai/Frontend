import type { NextPage } from 'next'
import styled from 'styled-components'

import { Colors } from '../../variables'
import { AccentSwitcher, ThemeSwitcher } from '../../components/configuration'

export const TitleContainer = styled.div`
    margin-bottom: 2.5rem;

    p {
        margin-top: 0.625rem;
        color: ${Colors.textGrey};
    }
`

const SubContainer = styled.div`
    margin-bottom: 2.5rem;

    &:last-of-type {
        margin-bottom: 0;
    }
    
    h2 {
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
    }
`

const Configuration: NextPage = () => {
    return (
        <div>
            <TitleContainer>
                <h1>Configuratie</h1>

                <p>Kies een accent kleur of verander het thema</p>
            </TitleContainer>

            <SubContainer>
                <h2>Kleurenthema</h2>

                <AccentSwitcher/>
            </SubContainer>

            <SubContainer>
                <h2>Thema</h2>
                
                <form>
                    <ThemeSwitcher id="dark" value="donker"/>

                    <ThemeSwitcher id="light" value="licht"/>

                    <ThemeSwitcher id="auto" value="automatisch"/>
                </form>
            </SubContainer>
        </div>
    )
  }
  
  export default Configuration