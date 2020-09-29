import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'

// Components
import { colors } from './Components/theme'
import { Button1, Button3 } from './Components/Buttons'
import { Container, Flex } from './Components/Containers'
import Filters from './Components/Filters'
import { Main } from './Components/Main'
import Notification from './Components/Notification'
import SignedOut from './Components/SignedOut'
import { H3, P1 } from './Components/Typography'

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
			<Container>
				<Flex align={'center'} justify={'space-between'}>
					{username === null 
						? <P1 color={colors.white}>{window.accountId}, add a username to create your profile.</P1>
						: (
							<Flex direction={'column'}>
								<H3 color={colors.white}>{username}'s Profile</H3>
								<button style={{width: '150px'}} onClick={onRemoveUsername}>delete username</button>
							</Flex>
						)
					}
					<Button1 onClick={logout}>
						Sign Out
					</Button1>
				</Flex>

				{username === null 
					&& (
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
									Your Username:
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
