import 'regenerator-runtime/runtime'
import React from 'react'
import styled from 'styled-components'
import { login, logout } from './utils'
import './global.css'

// Components
import { colors } from './Components/theme'
import { Box3 } from './Components/Boxes'
import { Button1, Button3 } from './Components/Buttons'
import { Container, Flex } from './Components/Containers'
import Filters from './Components/Filters'
import { Main } from './Components/Main'
import SignedOut from './Components/SignedOut'
import { H3, P1 } from './Components/Typography'

// Images

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
	const [username, setUsername] = React.useState()
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
		window.contract.setUser({ accountId: window.accountId, username: null})
		.then(() => {
		window.contract.getUser({ accountId: window.accountId })
			.then(usernameFromContract => {
				setUsername(usernameFromContract.username)
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
			<Flex align={'center'} justify={'center'}>
                <Button1 onClick={logout}>
                    Sign Out
                </Button1>
            </Flex>

			{username === null
				? <P1 color={colors.white} center>Hi {window.accountId}. Please add a username below.</P1>
				: (
					<Box3 marginTop={75}>
						<H3 color={colors.white} center>Hi {username}!</H3>
						<P1 color={colors.white} center>Add a recipe below.</P1>
					</Box3>
				)
			}
			<form onSubmit={async event => {
				event.preventDefault()

				const { fieldset, username } = event.target.elements
				const newUsername = username.value
				fieldset.disabled = true

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
				<fieldset id="fieldset">
					<label
						htmlFor="username"
					>
						Change your username
					</label>
					<Flex justify={'center'}>
						<input
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
				</fieldset>
			</form>
			<P1 color={colors.white} center>
				Your username is stored in the NEAR blockchain.
			</P1>
			<button onClick={onRemoveUsername}>Click to remove username</button>
			<Filters
				filter={filter} setFilter={setFilter}
			/>
			{showNotification && <Notification />}
		</Main>
	)
}

function Notification() {
	const urlPrefix = `https://explorer.${networkId}.near.org/accounts`

	return (
		<Aside>
			<a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.accountId}`}>
				{window.accountId}
			</a>
				{' '/* React trims whitespace around tags; insert literal space character when needed */}
				called method: 'setUser' in contract:
				{' '}
			<a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.contract.contractId}`}>
				{window.contract.contractId}
			</a>
			<footer>
				<div>✔ Succeeded</div>
				<div>Just now</div>
			</footer>
		</Aside>
	)
}

const Aside = styled.aside`
	animation: notify ease-in-out 10s;
	background-color: #e6e6e6;
	border-radius: 5px;
	bottom: 0;
	font-size: 1.4rem;
	margin: 2rem;
	padding: 2rem;
	position: fixed;
	transform: translateY(10em);
	right: 0;

	footer {
		display: flex;
		font-size: 1.4rem;
		justify-content: space-between;
		margin-top: 0.5em;
	}

	footer *:first-child {
		color: rgb(90, 206, 132);
		font-weight: bold;
	}

	footer *:last-child {
		color: #555;
	}
	
	@keyframes notify {
		0% { transform: translateY(10em) }
		5% { transform: translateY(0) }
		95% { transform: translateY(0) }
		100% { transform: translateY(10em) }
	}
`
