import type { NextPage } from 'next'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'

import { TernaryButton } from '../../components/buttons'
import { CategoryList } from '../../components/lists'
import themes, { accentColors, Theme } from '../../ThemeConfig'
import { TitleContainer } from '../configuration'
import useStore, { useAccent } from '../../store'
import { Colors, Transition } from '../../variables'
import { useData } from '../../hooks/useData'
import { CheckEnv } from '../../services/checks'
import { useState } from 'react'

interface ButtonContainerProps {
    theme: any,
    accent: string
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
    width: 100%;
    
    button {
        margin-top: 1rem;
        padding: 0.5rem 1.25rem;
        background: ${({ theme }) => theme.backgroundSec};
        transition: ${Transition.fast};
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 500;
        color: ${({ accent }) => accent};
        display: flex;
        align-items: flex-end;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    
        svg {
            margin-left: 0.25rem;
        }
    
        &:hover {
            background: ${({ accent }) => accent};
            color: ${Colors.textWhite};
        }
    }
`

const Categories: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const accent = useAccent((s: any) => s.accent)

    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_CATEGORIES_ENDPOINT));

    const [load, setLoad] = useState(10);
    const handleClick = () => setLoad(load + 10)

    return (
        <div>
            <TitleContainer>
                <h1>Categorieën</h1>
            </TitleContainer>

            {
                !isLoading && !isError && 
                <CategoryList data={data.slice(0, load)}/>
            }

            <ButtonContainer theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors][theme]}>
                <TernaryButton type="button" onClick={handleClick}>
                    Meer

                    <FiChevronDown fontSize={18} strokeWidth={2.75}/>
                </TernaryButton>
            </ButtonContainer>
        </div>
    )
}
  
export default Categories