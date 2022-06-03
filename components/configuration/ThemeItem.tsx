import type { NextPage } from 'next'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'

import themes, { accentColors, Theme } from '../../ThemeConfig'
import useStore, { useAccent } from '../../store'
import { Colors, Transition } from '../../variables'

interface ThemeItemProps {
    theme: keyof Theme,
}

interface ThemeItemContainerProps {
    theme: string,
    store: any,
}

const ThemeItemContainer = styled.div<ThemeItemContainerProps>`
    background: ${({ theme }) => themes[theme as keyof typeof themes].background};
    border: 2px solid ${({ store }) => store.backgroundSec};
    width: 8rem;
    height: 8rem;
    border-radius: 10px;
    transition: ${Transition.fast};
    position: relative;
    display: flex;
`

interface NavigationList {
    theme: string,
    accent: string
}

const NavigationList = styled.ul<NavigationList>`
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    width: auto;

    li {
        width: 1.8rem;
        height: 0.375rem;
        background: ${({ theme }) => themes[theme as keyof typeof themes].text};
        margin-bottom: 0.5rem;
        border-radius: 2px;
        transition: ${Transition.fast};

        &:first-of-type {
            background: ${({ accent }) => accent};
        }
    }
`

interface ContentProps {
    theme: string;
}

const Content = styled.div<ContentProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 1rem);
    background: ${({ theme }) => themes[theme as keyof typeof themes].backgroundSec};
    margin: 0.5rem 0.5rem 0.5rem 0;
    border-radius: 5px;
    padding: 0.625rem 0.75rem;

    span {
        background: ${({ theme }) => themes[theme as keyof typeof themes].background};
        border-radius: 5px;
        
        &:first-of-type {
            width: 100%;
            height: 40%;
            margin: 0;
            margin-bottom: 0.625rem;
        }
        
        &:last-of-type {
            width: 100%;
            height: 20%;
            margin: 0;
            margin-top: 0.625rem;
        }
    }

    div {
        width: 100%;
        height: 40%;
        display: flex;
                    
        span:first-of-type {
            width: 60%;
            height: 100%;
            margin: 0;
            margin-right: 0.625rem;
        }

        span:last-of-type {
            width: 40%;
            height: 100%;
            margin: 0;
        }
    }
`

interface IconContainerProps {
    accent: string
}

const IconContainer = styled.div<IconContainerProps>`
    background: ${({ accent }) => accent};
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    bottom: 10px;
    left: 10px;
    transition: ${Transition.fast};
    opacity: 0;
    
    input:checked + div & {
        opacity: 1;
    }
`

const ThemeItem: NextPage<ThemeItemProps> = ({ theme }) => {
    const store: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);

    return (
        <ThemeItemContainer theme={theme} store={themes[store]}>
            <NavigationList theme={theme} accent={accentColors[accent as keyof typeof accentColors][theme]}>
                <li></li>
                <li></li>
                <li></li>
            </NavigationList>

            <Content theme={theme}>
                <span></span>
                
                <div>
                    <span></span>
                    <span></span>
                </div>

                <span></span>
            </Content>

            <IconContainer accent={accentColors[accent as keyof typeof accentColors][store]}>
                <FiCheck strokeWidth={3} fontSize={14} color={Colors.textWhite}/>
            </IconContainer>
        </ThemeItemContainer>
    )
}

export default ThemeItem