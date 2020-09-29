import styled, { css } from 'styled-components'
import { colors, shadows } from './theme'
import respondTo from './Breakpoints'
import { Box3 } from './Boxes'
import { Flex } from './Containers'

export const Button1 = styled.button`
    background: ${colors.red};
    border: none;
    border-radius: 10px;
    box-shadow: ${shadows.button};
    color: ${colors.white};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    height: 4rem;
    letter-spacing: 1px;
    padding: 0 4rem;
    transition: all .3s ease;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
    `}

    ${respondTo.sm`
        height: 4.5rem;
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        height: 5rem;
    `}

    ${respondTo.xl`
        height: 6rem;
        font-size: 2rem;
    `}

    &:hover {
        background: ${colors.secondaryBlue};
        color: ${colors.white};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
        cursor: pointer;
    }

    ${props => props.active && css`
        background: ${colors.secondaryBlue};
        color: ${colors.white};
    `}
`

export const Button2 = styled.button`
    background: ${colors.white};
    border: none;
    border-radius: 10px;
    box-shadow: ${shadows.button};
    color: ${colors.red};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    height: 4rem;
    letter-spacing: 1px;
    padding: 0 1rem;
    text-transform: uppercase;
    transition: all .3s ease;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
        padding: 0 2rem;
    `}

    ${respondTo.sm`
        height: 4.5rem;
        font-size: 1.8rem;
        padding: 0 3rem;
    `}

    ${respondTo.md`
        height: 6rem;
        padding: 0 5rem;
    `}

    ${respondTo.xl`
        height: 8rem;
        font-size: 3.2rem;
        padding: 0 7rem;
    `}

    &:hover {
        background: ${colors.red};
        color: ${colors.white};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
        cursor: pointer;
    }

    ${props => props.active && css`
        background: ${colors.red};
        color: ${colors.white};
    `}
`

export const Button3 = styled.button`
    background: ${colors.yellow};
    border: none;
    border-radius: 10px;
    box-shadow: ${shadows.button};
    color: ${colors.black};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    height: 4rem;
    letter-spacing: 1px;
    padding: 0 2rem;
    transition: all .3s ease;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
    `}

    ${respondTo.sm`
        height: 4.5rem;
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        height: 4rem;
    `}

    ${respondTo.xl`
        height: 6rem;
        font-size: 2rem;
    `}

    &:hover {
        background: ${colors.secondaryBlue};
        color: ${colors.white};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
        cursor: pointer;
    }

    ${props => props.active && css`
        background: ${colors.secondaryBlue};
        color: ${colors.white};
    `}

    ${props => props.disabled && css`
        background: ${colors.secondaryBlue};
        color: ${colors.white};
        opacity: 0.8;

        &:hover {
            background: ${colors.secondaryBlue};
            color: ${colors.white};
            box-shadow: none;
            transform: scale(1);
            cursor: not-allowed;
        }
    `}
`

export const Button4 = styled.button`
    background: ${colors.white};
    border: 1px solid red;
    border-radius: 10px;
    box-shadow: ${shadows.button};
    color: ${colors.black};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    height: 3rem;
    padding: 0 1rem;
    transition: all .3s ease;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        height: 3rem;
        font-size: 1.2rem;
    `}

    ${respondTo.xl`
        height: 4rem;
        font-size: 1.4rem;
    `}

    &:hover {
        background: red;
        color: ${colors.white};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
        cursor: pointer;
    }

    ${props => props.active && css`
        background: ${colors.secondaryBlue};
        color: ${colors.white};
    `}
`

export const ButtonMenu = ({ setSidebar }) => {
    return (
        <ButtonContainer onClick={() => setSidebar(true)}>
            <Flex direction={'column'} justify={'space-between'}>
                <Box3>
                    <ButtonMenuLine width={35} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <ButtonMenuLine width={35} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <ButtonMenuLine width={35} color={'white'} />
                </Box3>
            </Flex>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background: ${colors.white};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
	justify-content: center;
    transition: all .5s ease;
    z-index: 101;

    &:hover,
    &:focus,
    &:active {
		background: ${colors.greyHover};
        cursor: pointer;
    }

    ${respondTo.xs`
        left: 4rem;
        width: 55px;
        height: 55px;
    `}

    ${respondTo.sm`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
    `}

    ${respondTo.lg`
        display: none;
    `}
`

const ButtonMenuLine = styled.div`
    background: ${colors.gold};

    ${props => css`
        width: ${props.width * .8}px;
        height: 2px;
        margin: 0 auto;

        ${respondTo.xs`
            width: ${props.width * .9}px;
            height: 2px;
            margin: 0 auto;
        `}

        ${respondTo.sm`
            width: ${props.width}px;
            height: 3px;
            margin: 0 auto;
        `}
    `};
`
