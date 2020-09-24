import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
	const [username, setUsername] = React.useState()
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [showNotification, setShowNotification] = React.useState(false)

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
		<main>
			<h1>Welcome to Food4Family!</h1>
			<p>
				Before exploring the recipes, you need to sign in. The button
				below will sign you in using NEAR Wallet.
			</p>
			<p>
				Go ahead and click the button below to try it out:
			</p>
			<p style={{ textAlign: 'center', marginTop: '2.5em' }}>
			<button onClick={login}>
				Sign in
			</button>
			</p>
		</main>
		)
	}

	return (
		<>
		<button className="link" style={{ float: 'right' }} onClick={logout}>
			Sign out
		</button>
		<main>
			
			{username === null
				? <h1>Hi {window.accountId}. Please add a username below.</h1>
				: (
					<div>
						<h1>Hi {username}!</h1>
						<h1>Add a recipe below.</h1>
					</div>
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
				style={{
					display: 'block',
					color: 'var(--gray)',
					marginBottom: '0.5em'
				}}
				>
				Change your username
				</label>
				<div style={{ display: 'flex' }}>
				<input
					autoComplete="off"
					defaultValue={username}
					id="username"
					onChange={e => setButtonDisabled(e.target.value === username)}
					style={{ flex: 1 }}
				/>
				<button
					disabled={buttonDisabled}
					style={{ borderRadius: '0 5px 5px 0' }}
				>
					Save
				</button>
				</div>
			</fieldset>
			</form>
			<p>
				Your username is stored in the NEAR blockchain.
			</p>
			<button onClick={onRemoveUsername}>Click to remove username</button>
		</main>
		{showNotification && <Notification />}
		</>
	)
	}

	function Notification() {
	const urlPrefix = `https://explorer.${networkId}.near.org/accounts`
	return (
		<aside>
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
		</aside>
	)
}
