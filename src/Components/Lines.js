import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Line = styled.div`
    ${props => css`
        width: ${props.width * .6}px;
        height: ${props.height * .6}px;
        margin: 0 auto;
        border-radius: 5px;

        ${respondTo.xs`
            height: ${props.height}px;
            width: ${props.width * .6}px;
        `}
        
        ${respondTo.sm`
            width: ${props.width * .8}px;
        `}

        ${respondTo.md`
            width: ${props.width}px;
        `}

        ${respondTo.lg`
        `}
    `};

    ${props => props.color && css`
        background: ${props.color};
    `};
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #D9D9D9;

    ${props => props.color && css`
        background: ${props.color};
    `};
`
