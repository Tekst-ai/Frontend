import type { NextPage } from "next";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

import useStore, { useAccent } from "../../store";
import themes, { accentColors, Theme } from "../../ThemeConfig";
import { Colors, Transition } from "../../variables";

const ColorList = styled.form`
    display: flex;
    align-items: center;
    min-height: 3.5rem;
`

interface ColorListItemProps {
    color: any,
    themeName: string
}

const ColorListItem = styled.label<ColorListItemProps>`
    margin-right: 1.25rem;
    cursor: pointer;

    input {
        appearance: none;
        position: absolute;
        
        &:checked + div {
            width: 3.5rem;
            height: 3.5rem;
            box-shadow: 0 3px 12px ${({ color, themeName }) => color[themeName] + "80"};
            
            svg {
                transform: scale(1) rotate(0deg);
            }
        }
    }

    div {
        transition: ${Transition.fast};
        width: 1.5rem;
        height: 1.5rem;
        background: ${({ color, themeName }) => color[themeName]};
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

    const accentColorList = [];
    let color: keyof typeof accentColors;
    for (color in accentColors) {
        const accentColorObject = { name: color, colors: accentColors[color] };
        accentColorList.push(accentColorObject);
    }

    console.log(theme);

    return (
        <ColorList>
            {
                accentColorList.map((color: any, index: number) => (
                    <ColorListItem themeName={theme} color={color.colors} key={index} htmlFor={color.name}>
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