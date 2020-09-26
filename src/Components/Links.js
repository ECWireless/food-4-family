import styled, { css } from 'styled-components'
import { colors } from './theme'

export const CustomLink = styled.a`
    transition: all .3s ease;
    text-decoration: none;

    ${props => props.color && css`
        color: ${props.color};
    `}

    &:hover {
        cursor: pointer;

        ${props => props.hover && css`
            color: ${colors.yellow};
        `}
    }
`