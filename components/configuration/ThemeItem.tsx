import type { NextPage } from 'next'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'

import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'
import useStore, { useAccent } from '../../store'
import { Breakpoint, Colors, Transition } from '../../variables'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { AccentStylingProps } from '../../interfaces/Styling'

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
    width: 4.5rem;
    height: 8rem;
    border-radius: 10px;
    transition: ${Transition.fast};
    position: relative;
    display: flex;
    
    @media (min-width: ${Breakpoint.mobile}) {
        width: 8rem;
    }
`

interface NavigationList {
    theme: string,
    accent: string
}

const NavigationList = styled.ul<NavigationList>`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (min-width: ${Breakpoint.mobile}) {
        padding: 1rem 0.5rem;
    }
    
    li {
        background: ${({ theme }) => themes[theme as keyof typeof themes].textSec};
        margin-bottom: 0.5rem;
        border-radius: 2px;
        transition: ${Transition.fast};
        
        @media (min-width: ${Breakpoint.mobile}) {
            width: 0.375rem;
            height: 0.375rem;
        }
        
        @media (min-width: ${Breakpoint.tablet}) {
            width: 1.8rem;
        }
        
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
    background: ${({ theme }) => themes[theme as keyof typeof themes].backgroundSec};
    margin: 0.375rem;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 0.875rem;
    
    @media (min-width: ${Breakpoint.mobile}) {
        padding: 0.625rem 0.75rem;
        margin: 0.5rem;
        margin-left: 0;
    }
    
    span {
        background: ${({ theme }) => themes[theme as keyof typeof themes].background};
        border-radius: 5px;
        
        &:first-of-type {
            width: 100%;
            height: 40%;
            margin: 0;
            margin-bottom: 0.5rem;
            
            @media (min-width: ${Breakpoint.mobile}) {
                margin-bottom: 0.625rem;
            }
        }
        
        &:last-of-type {
            width: 100%;
            height: 20%;
            margin: 0;
            margin-top: 0.5rem;
            
            @media (min-width: ${Breakpoint.mobile}) {
                margin-top: 0.625rem;
            }
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
            margin-right: 0.5rem;

            @media (min-width: ${Breakpoint.mobile}) {
                margin-right: 0.625rem;
            }
        }

        span:last-of-type {
            width: 40%;
            height: 100%;
            margin: 0;
        }
    }
`

const IconContainer = styled.div<AccentStylingProps>`
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
    const accent: keyof Accent = useAccent((s: any) => s.accent);

    const { width } = useWindowDimensions();

    return (
        <ThemeItemContainer theme={theme} store={themes[store]}>
            <NavigationList theme={theme} accent={accentColors[accent][theme]}>
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

            <IconContainer accent={accentColors[accent][store]}>
                <FiCheck strokeWidth={3} fontSize={14} color={Colors.textWhite}/>
            </IconContainer>
        </ThemeItemContainer>
    )
}

export default ThemeItem