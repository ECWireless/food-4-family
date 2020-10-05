import 'regenerator-runtime/runtime'
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import respondTo from './Breakpoints'
import '../global.css'

// Components
import { colors } from './theme'
import { Box1, Box3 } from './Boxes'
import { Button1 } from './Buttons'
import { Flex, Col2, Col2Left, Col2Right } from './Containers'
import { H1, P1 } from './Typography'

// Images
import LogoImage from '../assets/waffle.png'

const SignedOut = ({
    login,
}) => {
    return (
        <>
            <Flex align={'center'} justify={'center'}>
                <Button1 onClick={login}>
                    Sign In
                </Button1>
            </Flex>
            <Box3 marginTop={50}>
                <Col2>
                    <Box3 marginBottom={75}>
                        <Col2Left justify={'flex-end'}>
                            <Flex direction={'column'}>
                                <Fade>
                                    <H1 color={colors.white}>Welcome to</H1>
                                </Fade>
                                <Box1 marginTop={50}>
                                    <Fade delay={200}>
                                        <H1 bold color={colors.yellow}>Food4Family!</H1>
                                    </Fade>
                                </Box1>
                            </Flex>
                        </Col2Left>
                    </Box3>
                    <Box3 marginBottom={75}>
                        <Col2Right align={'flex-end'}>
                            <Fade delay={200}>
                                <Logo style={{ backgroundImage: `url(${LogoImage})` }} />
                            </Fade>
                        </Col2Right>
                    </Box3>
                </Col2>
            </Box3>
            <Fade bottom>
                <P1 color={colors.white}>
                    Sign in to add your own recipes or form a Family.
                </P1>
            </Fade>
        </>
    )
}

export default SignedOut

const Logo = styled.div`
	height: 15rem;
	width: 20rem;
	background-position: center;
	background-size: cover;
	border-radius: 15px;

	${respondTo.xs`
		height: 25rem;
		width: 30rem;
    `}

	${respondTo.sm`
		height: 30rem;
        width: 40rem;
    `}

	${respondTo.xl`
		height: 50rem;
		width: 60rem;
    `}
`
