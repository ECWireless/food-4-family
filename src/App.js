import 'regenerator-runtime/runtime'
import React from 'react'
import styled, { css } from 'styled-components'
import { login, logout } from './utils'
import respondTo from './Components/Breakpoints'
import './global.css'

// Components
import { colors } from './Components/theme'
import { Box3 } from './Components/Boxes'
import { Button1, Button3, Button4 } from './Components/Buttons'
import { Container, Flex } from './Components/Containers'
import Filters from './Components/Filters'
import { Main } from './Components/Main'
import Notification from './Components/Notification'
import SignedOut from './Components/SignedOut'
import { H3, P1, P3 } from './Components/Typography'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
	const [username, setUsername] = React.useState()
	const [loading, setLoading] = React.useState(false)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [showNotification, setShowNotification] = React.useState(false)
	const [filter, setFilter] = React.useState('recipes')

	React.useEffect(
		() => {
			if (window.walletConnection.isSignedIn()) {
				window.contract.getUser({ accountId: window.accountId })
				.then(usernameFromContract => {
					setUsername(usernameFromContract.username)
				})
			}
		},
		[]
	)

	const onRemoveUsername = () => {
		setLoading(true)
		window.contract.setUser({ accountId: window.accountId, username: null})
		.then(() => {
			window.contract.getUser({ accountId: window.accountId })
			.then(usernameFromContract => {
				setUsername(usernameFromContract.username)
				setLoading(false)
			})
		})
	}

	if (!window.walletConnection.isSignedIn()) {
		return (
		<Main>
			<Container>
				<SignedOut
					login={login}
				/>
				<Filters
					filter={filter} setFilter={setFilter}
				/>
			</Container>
		</Main>
		)
	}

	return (
		<Main>
			<Container>
				<Flex respondFlip align={'center'} justify={'space-between'}>
					{username === null 
						? <P1 color={colors.white}>{window.accountId}, add a username to create your profile.</P1>
						: (
							<Flex direction={'column'}>
								<H3 color={colors.white}>{username}'s Profile</H3>
								<Box3 marginTop={15}>
									{loading ? <P3 color={colors.white}>Deleting...</P3>
									: <Button4 onClick={onRemoveUsername}>Delete Profile</Button4>}
								</Box3>
							</Flex>
						)
					}
					<Box3 marginBottom={50}>
						<Button1 onClick={logout}>
							Sign Out
						</Button1>
					</Box3>
				</Flex>

				{username === null 
					&& (
						<Box3 marginTop={50}>
							<form onSubmit={async event => {
								event.preventDefault()

								const { fieldset, username } = event.target.elements
								const newUsername = username.value
								fieldset.disabled = true
								setButtonDisabled(true)

								try {
									await window.contract.setUser({
										accountId: window.accountId,
										username: newUsername
									})
								} catch (e) {
									alert(
									'Something went wrong! ' +
									'Maybe you need to sign out and back in? ' +
									'Check your browser console for more info.'
									)
									throw e
								} finally {
									fieldset.disabled = false
								}

								setUsername(newUsername)
								setShowNotification(true)
								setTimeout(() => {
									setShowNotification(false)
								}, 11000)
							}}>
								<FieldsetUsername
									id="fieldset"
									direction={'column'}
									justify={'center'}
									align={'center'}
								>
									<LabelUsername
										center
										color={colors.white}
										htmlFor="username"
									>
										Your Username:
									</LabelUsername>
									<Box3 marginTop={25}>
										<Flex justify={'center'}>
											<InputUsername
												autoComplete="off"
												defaultValue={username}
												id="username"
												onChange={e => setButtonDisabled(e.target.value === username)}
											/>
											<Button3
												disabled={buttonDisabled}
												style={{ borderRadius: '0 5px 5px 0' }}
											>
												Save
											</Button3>
										</Flex>
									</Box3>
								</FieldsetUsername>
							</form>
						</Box3>
					)
				}
				<Filters
					filter={filter} setFilter={setFilter}
				/>
				{showNotification && <Notification networkId={networkId} />}
			</Container>
		</Main>
	)
}

const FieldsetUsername = styled.fieldset`
	display: flex;

    ${props => css`
        justify-content: ${props.justify};
        align-items: ${props.align};
        flex-wrap: ${props.wrap};
        flex-direction: ${props.direction};
        height: ${props.height};
    `}

    ${props => props.respond && css`
        flex-direction: column;

        ${respondTo.lg`
            flex-direction: row;
        `}
    `}

    ${props => props.respondFlip && css`
        flex-direction: column-reverse;

        ${respondTo.lg`
            flex-direction: row;
        `}
    `}

    ${props => props.wrap && css`
        flex-wrap: wrap;

        ${respondTo.xs`
            justify-content: center;
        `}

        ${respondTo.sm`
            justify-content: flex-start;
        `}
    `}
`

const LabelUsername = styled.label`
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

const InputUsername = styled.input`
	width: 17rem;
	outline: none;
	padding-left: 2rem;
	font-size: 1.8rem;
	border-radius: 5px 0 0 5px;
	border: 2px solid transparent;
	transition: all .3s ease;

	&:hover {
		border: 2px solid ${colors.yellow};
	}

	&:active,
	&:focus {
		border: 2px solid ${colors.yellow};
		border-left: 8px solid ${colors.yellow};
	}

	${respondTo.xs`
		width: 30rem;
	`}

	${respondTo.sm`
		width: 40rem;
	`}

	${respondTo.xl`
		width: 60rem;
	`}
`
