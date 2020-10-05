import React from 'react'
import styled, { css } from 'styled-components'
import '../global.css'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'
import { Box3 } from './Boxes'
import { Button3 } from './Buttons'

const AddRecipe = ({
    setLoading,
    setAddingRecipe,
}) => {
    const [inputs, setInputs] = React.useState({
        title: '',
        ingredients: '',
        instructions: '',
    })

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            await window.contract.setRecipe(inputs)
        } catch (e) {
            alert(
            'Something went wrong! ' +
            'Maybe you need to sign out and back in? ' +
            'Check your browser console for more info.'
            )
            throw e
        }

        setInputs(prev => ({
            ...prev,
            title: '',
            ingredients: '',
            instructions: '',
        }))
        setAddingRecipe(false)
        setLoading(false)
    }

    return (
        <Box3 marginTop={50} marginBottom={50}>
            <form onSubmit={handleOnSubmit}>
                <FieldsetRecipe
                    id="fieldset-recipe"
                    direction={'column'}
                    justify={'flex-start'}
                    align={'flex-start'}
                >
                    <Label
                        color={colors.white}
                        htmlFor="title"
                    >
                        Recipe Title:
                    </Label>
                    <Box3 marginTop={15} marginBottom={50}>
                        <Input
                            autoComplete="off"
                            id="title"
                            value={inputs.title}
                            onChange={handleOnChange}
                        />
                    </Box3>
                    <Label
                        color={colors.white}
                        htmlFor="ingredients"
                    >
                        Recipe Ingredients:
                    </Label>
                    <Box3 marginTop={15} marginBottom={50}>
                        <TextArea
                            autoComplete="off"
                            id="ingredients"
                            value={inputs.ingredients}
                            onChange={handleOnChange}
                        />
                    </Box3>
                    <Label
                        color={colors.white}
                        htmlFor="instructions"
                    >
                        Recipe Instructions:
                    </Label>
                    <Box3 marginTop={15} marginBottom={25}>
                        <TextArea
                            autoComplete="off"
                            id="instructions"
                            value={inputs.instructions}
                            onChange={handleOnChange}
                        />
                    </Box3>
                    <Button3 type='submit'>
                        Save
                    </Button3>
                </FieldsetRecipe>
            </form>
        </Box3>
    )
}

export default AddRecipe

const FieldsetRecipe = styled.fieldset`
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

const Label = styled.label`
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Roboto', sans-serif;
    font-weight: light;

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
        line-height: 25px;
    `}

    ${respondTo.xl`
        font-size: 2.6rem;
        line-height: 30px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

const Input = styled.input`
    width: 17rem;
    height: 4rem;
	outline: none;
    font-family: 'Roboto', sans-serif;
	padding-left: 2rem;
	font-size: 1.8rem;
	border-radius: 5px;
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
		width: 50rem;
	`}

	${respondTo.xl`
		width: 60rem;
	`}
`

const TextArea = styled.textarea`
    width: 17rem;
    height: 15rem;
	outline: none;
	padding: 1rem 2rem;
	font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
	border-radius: 5px;
	border: 2px solid transparent;
    transition: all .3s ease;
    line-height: 25px;

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
		width: 50rem;
	`}

	${respondTo.xl`
		width: 60rem;
	`}
`
