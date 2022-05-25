import type { NextPage } from "next";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

import { useAccent } from "../../store";
import { accentColors } from "../../ThemeConfig";

const ColorList = styled.form`
    display: flex;
    align-items: center;
    min-height: 3.5rem;
`

interface ColorListItemProps {
    color: any
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
            box-shadow: 0 3px 12px ${(ColorListItemProps) => ColorListItemProps.color + "80"};
            
            svg {
                transform: scale(1) rotate(0deg);
            }
        }
    }

    div {
        transition: all 0.3s ease-in-out;
        width: 1.5rem;
        height: 1.5rem;
        background: ${(ColorListItemProps) => ColorListItemProps.color};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        svg {
            transition: all 0.3s ease-in-out;
            transform: scale(0) rotate(-30deg);
        }
    }
`

const AccentSwitcher: NextPage = () => {
    const accentColor: any = useAccent((s: any) => s.accent);
    const store: any = useAccent((s: any) => s.setAccent);

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

    return (
        <ColorList>
            {
                accentColorList.map((color: any, index: number) => (
                    <ColorListItem color={color.colors.color} key={index} htmlFor={color.name}>
                        <input type="radio" id={color.name} value={color.name} name="AccentSelector" checked={color.name === accentColor ? true : false} onChange={handleChange}/>
                        
                        <div>
                            <FiCheck fontSize={32} strokeWidth={2.5} color={color.colors.text}/>
                        </div>
                    </ColorListItem>
                ))
            }
        </ColorList>
    )
}

export default AccentSwitcher