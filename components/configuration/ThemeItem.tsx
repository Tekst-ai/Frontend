import type { NextPage } from 'next'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'

import { Colors } from '../../variables'
import themes, { Theme } from '../../ThemeConfig'
import useStore from '../../store'

interface ThemeItemProps {
    theme: string
}

interface ThemeItemContainerProps {
    theme: string,
    store: any
}

const ThemeItemContainer = styled.div<ThemeItemContainerProps>`
    background: ${(ThemeItemContainerProps) => themes[ThemeItemContainerProps.theme as keyof typeof themes].background};
    border: 2px solid ${({ store }: any ) => store.backgroundSec};
    width: 8rem;
    height: 8rem;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    position: relative;
    display: flex;
    
    div:last-of-type {
        visibility: hidden;
        background: ${Colors.primary};
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        bottom: 10px;
        left: 10px;
    }

    input:checked + & {
        box-shadow: 0 3px 12px #EF1E6E99;
        border: 2px solid ${Colors.primary};

        div:last-of-type {
            visibility: visible;
        }
    }
`

interface NavigationList {
    theme: string,
}

const NavigationList = styled.ul<NavigationList>`
    padding: 1rem 0.75rem;
    display: flex;
    flex-direction: column;
    width: auto;

    li {
        width: 1.8rem;
        height: 0.375rem;
        background: ${(NavigationList) => themes[NavigationList.theme as keyof typeof themes].text};
        margin-bottom: 0.5rem;
        border-radius: 2px;

        &:first-of-type {
            background: ${Colors.primary};
        }
    }
`

interface ContentProps {
    theme: string;
}

const Content = styled.div<ContentProps>`
    display: flex;
    width: 100%;
    height: calc(100% - 1rem);
    background: ${(ContentProps) => themes[ContentProps.theme as keyof typeof themes].backgroundSec};
    margin: 0.5rem 0.5rem 0.5rem 0;
    border-radius: 5px;
`

const ThemeItem: NextPage<ThemeItemProps> = ({ theme }) => {
    const store: keyof Theme = useStore((s: any) => s.theme);

    return (
        <ThemeItemContainer theme={theme} store={themes[store]}>
            <NavigationList theme={theme}>
                <li></li>
                <li></li>
                <li></li>
            </NavigationList>

            <Content theme={theme}>

            </Content>

            <div>
                <FiCheck strokeWidth={3} fontSize={14} color={Colors.textWhite}/>
            </div>
        </ThemeItemContainer>
    )
}

export default ThemeItem