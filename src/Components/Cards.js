import styled from 'styled-components'
import respondTo from './Breakpoints'
import { colors, shadows } from './theme'

export const Card1 = styled.div`
    background: ${colors.white};
    width: 100%;
    box-shadow: ${shadows.card};
    padding: 4rem 2rem;
    border-radius: 5px;

    ${respondTo.xs`
        padding: 3rem;
    `}

    ${respondTo.sm`
        padding: 4rem;
    `}
`

export const Card2 = styled.div`
    background: rgba(0,0,0,.5);
    width: 100%;
    box-shadow: ${shadows.card};
    padding: 4rem 2rem;
    border-radius: 5px;

    ${respondTo.xs`
        padding: 3rem;
    `}

    ${respondTo.sm`
        padding: 4rem;
    `}
`