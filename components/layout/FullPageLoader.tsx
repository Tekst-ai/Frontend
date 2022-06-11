import type { NextPage } from "next";
import styled from "styled-components";

import useStore from "../../store";
import themes, { Theme } from "../../ThemeConfig";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    background: ${({ theme }) => theme.background};
`

const FullPageLoader: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}/>
    )
}

export default FullPageLoader