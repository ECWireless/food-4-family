import React from 'react'
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'

const Spinner = () => {
    return (
        <LDSRing><div></div><div></div><div></div><div></div></LDSRing>
    )
}

export default Spinner

const LDSRing = styled.div`
    z-index: 1000;
    width: 20rem;
    height: 20rem;

    ${respondTo.xs`
        width: 10rem;
        height: 10rem;
    `}

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 8rem;
        height: 8rem;
        margin: 8px;
        border: 6px solid ${colors.yellow};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${colors.yellow} transparent transparent transparent;

        ${respondTo.xs`
            width: 8rem;
            height: 8rem;
        `}
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`
