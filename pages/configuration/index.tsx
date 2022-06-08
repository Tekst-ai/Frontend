import type { NextPage } from 'next'
import styled from 'styled-components'

import { Breakpoint, Colors } from '../../variables'
import { AccentSwitcher, ThemeSwitcher } from '../../components/configuration'
import themes, { Theme } from '../../ThemeConfig'
import useStore from '../../store'

interface TitleContainerProps {
    theme: keyof Theme
}

export const TitleContainer = styled.div<TitleContainerProps>`
    margin-bottom: 1.75rem;
    
    @media (min-width: ${Breakpoint.mobile}) {
        margin-bottom: 2rem;
    }
    
    p {
        margin-top: 0.625rem;
        color: ${({ theme }) => theme.textSec};
    }
`

const SubContainer = styled.div`
    margin-bottom: 1.5rem;
    
    @media (min-width: ${Breakpoint.mobile}) {
        margin-bottom: 2.5rem;
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }
    
    h2 {
        margin-bottom: 1rem;

        @media (min-width: ${Breakpoint.mobile}) {
            margin-bottom: 1.5rem;
        }
    }

    form {
        display: flex;
    }
`

const Configuration: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <div>
            <TitleContainer theme={themes[theme]}>
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

                    {/* <ThemeSwitcher id="auto" value="automatisch"/> */}
                </form>
            </SubContainer>
        </div>
    )
  }
  
  export default Configuration