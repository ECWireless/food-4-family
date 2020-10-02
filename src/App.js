import 'regenerator-runtime/runtime'
import React from 'react'
import styled, { css } from 'styled-components'
import { login, logout } from './utils'
import respondTo from './Components/Breakpoints'
import './global.css'

// Components
import { colors } from './Components/theme'
import Authors from './Components/Authors'
import { Box3 } from './Components/Boxes'
import { Button1, Button4 } from './Components/Buttons'
import { Container, Flex } from './Components/Containers'
import Filters from './Components/Filters'
import { Main } from './Components/Main'
import Notification from './Components/Notification'
import Profile from './Components/Profile'
import SignedOut from './Components/SignedOut'
import { H3, P1, P3 } from './Components/Typography'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
	const [username, setUsername] = React.useState(null)
	const [loading, setLoading] = React.useState(false)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [showNotification, setShowNotification] = React.useState(false)
	const [filter, setFilter] = React.useState('recipes')
	const [authors, setAuthors] = React.useState(null)

	React.useEffect(
		() => {
			if (window.walletConnection.isSignedIn()) {
				window.contract.getUser({ accountId: window.accountId })
				.then(usernameFromContract => {
					if (usernameFromContract === null) {
						return setUsername(null)
					}
					return setUsername(usernameFromContract.username)
				})
			}
			window.contract.getAllUsers()
			.then(allUsers => {
				return setAuthors(allUsers)
			})
		},
		[loading]
	)

	const onDeleteGlobalUser = () => {
		setLoading(true)
		window.contract.deleteGlobalUser({ id: window.accountId })
		.then(() => {
			window.contract.getUser({ accountId: window.accountId })
			.then(usernameFromContract => {
				if (usernameFromContract === null) {
					setLoading(false)
					return setUsername(null)
				}
				setLoading(false)
				return setUsername(usernameFromContract.username)
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
				<Authors
					filter={filter}
					authors={authors}
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
									: <Button4 onClick={onDeleteGlobalUser}>Delete Profile</Button4>}
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

				<Profile
					setLoading={setLoading}
					username={username}
					buttonDisabled={buttonDisabled}
					setButtonDisabled={setButtonDisabled}
					setUsername={setUsername}
					setShowNotification={setShowNotification}
				/>
				<Filters
					filter={filter} setFilter={setFilter}
				/>
				<Authors
					filter={filter}
					authors={authors}
				/>
				{showNotification && <Notification networkId={networkId} />}
			</Container>
		</Main>
	)
}
