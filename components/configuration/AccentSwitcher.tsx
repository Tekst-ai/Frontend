import type { NextPage } from "next";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { useData } from "../../hooks/useData";
import { CheckEnv } from "../../services/checks";

import useStore, { useAccent } from "../../store";
import { accentColors, Theme } from "../../ThemeConfig";
import { Breakpoint, Colors, Transition } from "../../variables";

const ColorList = styled.form`
    display: flex;
    align-items: center;
    min-height: 3.5rem;
    flex-wrap: wrap;

    @media (min-width: ${Breakpoint.mobile}) {

    }
`

interface ColorListItemProps {
    color: string,
}

const ColorListItem = styled.label<ColorListItemProps>`
    /* margin-right: 1.25rem; */
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
`

const AccentSwitcher: NextPage = () => {
    const accentColor: any = useAccent((s: any) => s.accent);
    const store: any = useAccent((s: any) => s.setAccent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    const handleChange = (e: any) => {
        if (e.currentTarget.value) {
            store(e.currentTarget.value);
            localStorage.setItem('accent', e.currentTarget.value);
        }
    }

    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_PROFILE_ENDPOINT));

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

    return (
        <ColorList>
            {
                accentColorList.map((color: any, index: number) => (
                    <ColorListItem color={color.colors[theme]} key={index} htmlFor={color.name}>
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

export default AccentSwitcher