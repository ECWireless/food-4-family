import 'regenerator-runtime/runtime'
import React from 'react'
import styled from 'styled-components'
import respondTo from './Breakpoints'
import '../global.css'

// Components
import { colors } from './theme'
import { Box1, Box3 } from './Boxes'
import { Button1 } from './Buttons'
import { Flex, Col2, Col2Left, Col2Right } from './Containers'
import { H1, P1 } from './Typography'

// Images
import LogoImage from '../assets/waffle.jpg'

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
                                <H1 color={colors.white}>Welcome to</H1>
                                <Box1 marginTop={50}>
                                    <H1 bold color={colors.yellow}>Food4Family!</H1>
                                </Box1>
                            </Flex>
                        </Col2Left>
                    </Box3>
                    <Box3 marginBottom={75}>
                        <Col2Right align={'flex-end'}>
                            <Logo style={{ backgroundImage: `url(${LogoImage})` }} />
                        </Col2Right>
                    </Box3>
                </Col2>
            </Box3>
            <P1 color={colors.white}>
                Sign in to add your own recipes or form a Family.
            </P1>
        </>
    )
}

export default SignedOut

const Logo = styled.div`
	height: 30rem;
	width: 20rem;
	background: ${colors.red};
	background-position: center;
	background-size: cover;
	border-radius: 15px;
	border: 5px solid ${colors.white};

	${respondTo.xs`
		height: 30rem;
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
