import 'regenerator-runtime/runtime'
import React from 'react'
import styled from 'styled-components'
import '../global.css'

export default function Notification({
    networkId,
}) {
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
