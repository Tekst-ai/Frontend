import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

import { useData } from "../../hooks/useData";
import { CheckEnv } from "../../services/checks";
import useStore, { useAccent } from "../../store";
import themes, { Accent, accentColors, Theme } from "../../ThemeConfig";
import { Colors, Transition } from "../../variables";

const ColorList = styled.form`
    display: flex;
    align-items: center;
    min-height: 3.5rem;
    flex-wrap: wrap;
`

interface ColorListItemProps {
    color: string,
    theme: keyof Theme,
    isCompanyColor: boolean,
}

const ColorListItem = styled.label<ColorListItemProps>`
    width: 4rem;
    height: 3.5rem;
    cursor: pointer;
    position: relative;

    input {
        appearance: none;
        position: absolute;
        
        &:checked + div {
            width: 3.5rem;
            height: 3.5rem;
            box-shadow: 0 3px 12px ${({ color }) => color + "80"};
            
            svg {
                transform: scale(1) rotate(0deg);
            }
        }
    }
    
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: ${Transition.fast};
        width: 1.75rem;
        height: 1.75rem;
        background: ${({ color }) => color};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        svg {
            transition: ${Transition.fast};
            transform: scale(0) rotate(-30deg);
        }
    }

    ${({ isCompanyColor, theme }) => isCompanyColor && `
        &:first-of-type {
            margin-right: 20px;

            &::after {
                content: "";
                width: 3px;
                height: 2.5rem;
                position: absolute;
                top: 50%;
                right: -11.5px;
                transform: translateY(-50%);
                border-radius: 3px;
                background: ${theme.background + 80};
            }
        }
    `}
`

const AccentSwitcher: NextPage = () => {
    const accentColor: keyof Accent = useAccent((s: any) => s.accent);
    const store: any = useAccent((s: any) => s.setAccent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    const handleChange = (e: any) => {
        if (e.currentTarget.value) {
            store(e.currentTarget.value);
            localStorage.setItem('accent', e.currentTarget.value);
        }
    }

    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_PROFILE_ENDPOINT));
    const [isCompanyColor, setIsCompanyColor] = useState(false);

    const accentColorList = [];
    let color: keyof typeof accentColors;
    for (color in accentColors) {
        if (color === "company") {
            if (!isLoading && !isError && data.companyColor !== "" && data.companyColor !== undefined) {
                const accentColorObject = { name: color, colors: accentColors[color] };
                accentColorList.push(accentColorObject);
            }
        } else {
            const accentColorObject = { name: color, colors: accentColors[color] };
            accentColorList.push(accentColorObject);
        }
    }

    useEffect(() => {
        if (!isLoading && !isError && data.companyColor !== "" && data.companyColor !== undefined) {
            setIsCompanyColor(true)
        }
    }, [data?.companyColor, isLoading, isError])

    return (
        <ColorList>
            {
                accentColorList.map((color: any, index: number) => (
                    <ColorListItem color={color.colors[theme]} key={index} htmlFor={color.name} theme={themes[theme]} isCompanyColor={isCompanyColor}>
                        <input type="radio" id={color.name} value={color.name} name="AccentSelector" checked={color.name === accentColor ? true : false} onChange={handleChange}/>
                        
                        <div>
                            <FiCheck fontSize={32} strokeWidth={2.5} color={Colors.textWhite}/>
                        </div>
                    </ColorListItem>
                ))
            }
        </ColorList>
    )
}

export default AccentSwitcher;