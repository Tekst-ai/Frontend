import type { NextPage } from 'next'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'

import { Colors } from '../../variables'
import { accentColors } from '../../ThemeConfig'
import { useAccent } from '../../store'
import { ThemeSwitcher } from '../../components/configuration'

const TitleContainer = styled.div`
    margin-bottom: 2.5rem;

    p {
        margin-top: 0.625rem;
        color: ${Colors.textGrey};
    }
`

const SubContainer = styled.div`
    margin-bottom: 2.5rem;
    
    h2 {
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
    }
`

const ColorList = styled.ul`
    display: flex;
    align-items: center;
`

interface ColorListItemProps {
    color: string
}

const ColorListItem = styled.li<ColorListItemProps>`
    margin-right: 1.25rem;
    width: 1.5rem;
    height: 1.5rem;
    background: ${(ColorListItemProps) => ColorListItemProps.color};
    border-radius: 50%;
`

const ColorListItemActive = styled(ColorListItem)`
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 0 3px 12px #EF1E6E99;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Configuration: NextPage = () => {
    const accentColor: any = useAccent();

    return (
        <div>
            <TitleContainer>
                <h1>Configuration</h1>

                <p>Kies een accent kleur of verander het thema</p>
            </TitleContainer>

            <SubContainer>
                <h2>Kleurenthema</h2>

                <ColorList>
                    {
                        accentColors.map((color: any, index: number) => (
                            color.name === accentColor.theme ?
                            <ColorListItemActive key={index} color={color.color}>
                                <FiCheck fontSize={32} strokeWidth={2.5} color={Colors.textWhite}/>
                            </ColorListItemActive>:
                            <ColorListItem key={index} color={color.color}/>
                        ))
                    }
                </ColorList>
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