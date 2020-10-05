import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'

// Components
import { colors } from './Components/theme'
import Authors from './Components/Authors'
import { Box3 } from './Components/Boxes'
import { Button1, Button4 } from './Components/Buttons'
import { Container, Flex } from './Components/Containers'
import Filters from './Components/Filters'
import Loading from './Components/Loading'
import { Main } from './Components/Main'
import Profile from './Components/Profile'
import Recipes from './Components/Recipes'
import SignedOut from './Components/SignedOut'
import { H2, P1 } from './Components/Typography'

export default function App() {
	const [loading, setLoading] = React.useState(false)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [filter, setFilter] = React.useState('recipes')

	const [username, setUsername] = React.useState(null)
	const [authors, setAuthors] = React.useState(null)
	const [recipes, setRecipes] = React.useState(null)

	
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
			window.contract.getAllRecipes()
			.then(allRecipes => {
				return setRecipes(allRecipes)
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
				{filter === 'authors' && <Authors
					authors={authors}
					recipes={recipes}
					loading={loading}
					setLoading={setLoading}
				/>}
				{filter === 'recipes' && <Recipes
					recipes={recipes}
					loading={loading}
					setLoading={setLoading}
				/>}
			</Container>
		</Main>
		)
	}

	return (
		<>
			<Main>
				<Container>
					<Flex respondFlip align={'center'} justify={'space-between'}>
						{username === null 
							? <P1 color={colors.white}>{window.accountId}, add a username to create your profile.</P1>
							: (
								<Flex direction={'column'}>
									<H2 color={colors.white}>{username}'s Profile</H2>
									<Box3 marginTop={25} marginBottom={50}>
										<Button4 onClick={onDeleteGlobalUser}>Delete Profile</Button4>
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
						loading={loading}
						setLoading={setLoading}
						username={username}
						buttonDisabled={buttonDisabled}
						setButtonDisabled={setButtonDisabled}
						setUsername={setUsername}
					/>
					<Filters
						filter={filter} setFilter={setFilter}
					/>
					{filter === 'authors' && <Authors
						authors={authors}
						recipes={recipes}
						loading={loading}
						setLoading={setLoading}
					/>}
					{filter === 'recipes' && <Recipes
						recipes={recipes}
						loading={loading}
						setLoading={setLoading}
					/>}
				</Container>
			</Main>
			<Loading
				loading={loading}
			/>
		</>
	)
}
