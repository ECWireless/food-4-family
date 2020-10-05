import React from 'react'
import styled from 'styled-components'

// Components
import { colors, shadows } from './theme'
import AddRecipe from './AddRecipe'
import { Box3 } from './Boxes'
import { Button4 } from './Buttons'
import { Flex } from './Containers'
import { H3, P1 } from './Typography'
import YourRecipes from './YourRecipes'

const ProfileRecipes = ({
    loading,
    setLoading,
}) => {
    const [addingRecipe, setAddingRecipe] = React.useState(false)
    return (
        <>
            {!addingRecipe && <Box3 marginTop={25}>
                <Flex align={'center'}>
                    <P1 color={colors.white}>Add a recipe</P1>
                    <AddIcon onClick={() => setAddingRecipe(true)}>+</AddIcon>
                </Flex>
            </Box3>}

            {addingRecipe ? (
                <>
                    <AddRecipe
                        setLoading={setLoading}
                        setAddingRecipe={setAddingRecipe}
                    />
                    <Button4 onClick={() => setAddingRecipe(false)} color={colors.yellow}>Cancel</Button4>
                </>
            )
                : (
                    <YourRecipes
                        loading={loading}
                        setLoading={setLoading}
                    />
                )
            }
        </>
    )
}

export default ProfileRecipes

const AddIcon = styled.button`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin-left: 2rem;
    border: 1px solid ${colors.red};
    font-weight: 100;
    font-size: 4rem;
    color: ${colors.brown};
    background: ${colors.white};
    outline: none;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        color: ${colors.white};
        background: ${colors.red};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
    }

    &:active {
        transform: scale(.97);
    }
`
