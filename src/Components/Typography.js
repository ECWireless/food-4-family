import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const H1 = styled.h1`
    font-size: 3.4rem;
    font-weight: light;
    line-height: 30px;
    letter-spacing: 3px;
    font-family: 'Roboto', sans-serif;

    ${respondTo.xs`
        line-height: 40px;
        font-size: 5rem;
    `}

    ${respondTo.sm`
        font-size: 7rem;
        line-height: 70px;
    `}

    ${respondTo.md`
        font-size: 9rem;
    `}

    ${respondTo.lg`
        font-size: 10rem;
    `}

    ${respondTo.xl`
        font-size: 15rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.bold && css`
        font-weight: bold;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const H2 = styled.h2`
    font-size: 2.8rem;
    font-weight: 300;
    line-height: 35px;
    letter-spacing: 3px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    ${respondTo.xs`
        font-size: 3.5rem;
        line-height: 45px;
    `}

    ${respondTo.sm`
        font-size: 4rem;
    `}

    ${respondTo.md`
        font-size: 4.5rem;
    `}

    ${respondTo.lg`
        font-size: 5rem;
        font-weight: 400;
    `}

    ${respondTo.xl`
        font-size: 6.5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const H3 = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 2px;
    font-family: 'Roboto', sans-serif;

    ${respondTo.xs`
        font-size: 2.2rem;
        line-height: 35px;
    `}

    ${respondTo.sm`
        font-size: 2.6rem;
    `}

    ${respondTo.md`
        font-size: 3rem;
    `}

    ${respondTo.lg`
        font-size: 3.5rem;
    `}

    ${respondTo.xl`
        font-size: 4rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const H4 = styled.h4`
    font-size: 1.8rem;
    line-height: 30px;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    ${respondTo.sm`
        font-size: 2rem;
    `}

    ${respondTo.md`
        font-size: 2.2rem;
    `}

    ${respondTo.lg`
        font-size: 2.5rem;
    `}

    ${respondTo.xl`
        font-size: 3.6rem;
        line-height: 40px;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const P1 = styled.p`
    font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: light;

    ${respondTo.xs`
        font-size: 1.6rem;
    `}

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
        font-size: 2.2rem;
        line-height: 30px;
    `}

    ${respondTo.xl`
        font-size: 2.8rem;
        line-height: 25px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P2 = styled.p`
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Roboto', sans-serif;
    font-weight: light;

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
        line-height: 25px;
    `}

    ${respondTo.xl`
        font-size: 2.6rem;
        line-height: 30px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P3 = styled.p`
    font-size: 1.5rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Roboto', sans-serif;
    font-weight: light;

    ${respondTo.sm`
        font-size: 1.6rem;
    `}

    ${respondTo.md`
        font-size: 1.8rem;
    `}

    ${respondTo.xl`
        font-size: 3rem;
        line-height: 38px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.bold && css`
        font-weight: 600;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P4 = styled.p`
    font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Roboto', sans-serif;
    font-weight: light;
    margin: 0;
    padding: 0;

    ${respondTo.xs`
    `}

    ${respondTo.sm`
        font-size: 1.5rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 27px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P5 = styled.p`
    font-size: 1.2rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Roboto', sans-serif;
    font-weight: light;

    ${respondTo.xs`
    `}

    ${respondTo.sm`
        font-size: 1.2rem;
    `}

    ${respondTo.md`
        font-size: 1.4rem;
    `}

    ${respondTo.xl`
        font-size: 1.8rem;
        line-height: 27px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.bold && css`
        font-weight: bold;
    `}

    ${props => css`
        color: ${props.color}
    `}
`
