import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'

export const Main = styled.main`
    border: 2px solid ${colors.white};
    margin: 5rem;
    padding: 5rem 0;
    border-radius: 15px;
`