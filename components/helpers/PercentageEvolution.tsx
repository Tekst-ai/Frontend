import type { NextPage } from 'next'
import { FiTrendingDown, FiTrendingUp, FiMinus } from 'react-icons/fi'
import styled from 'styled-components';

import { Colors } from '../../variables';

interface PercentageEvolutionProps {
    percentage: number,
}

interface ContainerProps {
    color: string,
}

const Container = styled.span<ContainerProps>`
    display: flex;
    align-items: flex-end;
    color: ${({ color }) => color};
    font-size: 0.75rem;

    svg {
        margin-right: 0.35rem;
    }

`

const PercentageEvolution: NextPage<PercentageEvolutionProps> = ({ percentage }) => {
    let percentageComponent: any;

    if (percentage > 0) {
        percentageComponent = <Container color={Colors.positive}><FiTrendingUp fontSize={10}/>{percentage}%</Container>
    } else if (percentage < 0) {
        percentageComponent = <Container color={Colors.negative}><FiTrendingDown fontSize={10}/>{percentage}%</Container>
    } else if (percentage === 0) {
        percentageComponent = <Container color={Colors.positive}><FiMinus fontSize={10}/></Container>
    }
    
    return percentageComponent;
}

export default PercentageEvolution