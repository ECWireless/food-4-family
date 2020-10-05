import React from 'react'
import styled, { css } from 'styled-components'

// Components
import Spinner from './Spinner'

const Loading = ({
    loading,
}) => {
    return (
        <Backdrop loading={loading ? 'true' : 'false'}>
            <Spinner />
        </Backdrop>
    )
}

export default Loading

const Backdrop = styled.div`
	position: fixed;
    top: 0;
    left: 0;
	height: 100vh;
	width: 100%;
	background: #000;
	z-index: -1;
	opacity: 0;
    transition: all .5s ease;
    display: flex;
    align-items: center;
    justify-content: center;

	${props => props.loading === 'true' && css`
		z-index: 999;
		opacity: .8;
	`}
`
