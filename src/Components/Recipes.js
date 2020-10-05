import React from 'react'
import styled from 'styled-components'
import '../global.css'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'
import { Box3 } from './Boxes'
import { Button4 } from './Buttons'
import { Flex } from './Containers'
import { H2, H3, P1, P3 } from './Typography'

const Recipes = ({
    recipes,
    loading,
    setLoading,
}) => {
    const [selectedRecipe, setSelectedRecipes] = React.useState(null)

    return (
        <>
            {recipes !== null && selectedRecipe === null && <Flex wrap={'true'}>
                {recipes.map(recipe => (
                    <IngredientCard
                        loading={loading}
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        author={recipe.author}
                        setSelectedRecipes={setSelectedRecipes}
                    />
                ))}
            </Flex>}
            {recipes !== null && selectedRecipe !== null && (
                <IngredientDetails
                    loading={loading}
                    setLoading={setLoading}
                    setSelectedRecipes={setSelectedRecipes}
                    selectedRecipe={selectedRecipe}
                />
            )
            }
        </>
    )
}

export default Recipes

const IngredientCard = ({
    loading,
    id,
    title,
    author,
    setSelectedRecipes,
}) => {
    const [username, setUsername] = React.useState('')

    React.useEffect(
		() => {
			window.contract.getUser({ accountId: author })
            .then(usernameFromContract => {
                if (usernameFromContract === null) {
                    return setUsername(null)
                }
                return setUsername(usernameFromContract.username)
            })
		},
		[loading]
    )

    
    return (
        <Box3 marginTop={50}>
            <IngredientBackground onClick={() => setSelectedRecipes(id)}>
                <Flex style={{ height: '100%' }} direction={'column'} align={'center'} justify={'center'}>
                    <Box3 marginBottom={15}>
                        <H3 center color={colors.yellow}>{title}</H3>
                    </Box3>
                    <P3 center color={colors.white}>Author: {username}</P3>
                </Flex>
            </IngredientBackground>
        </Box3>
    )
}

const IngredientBackground = styled.div`
    width: 25rem;
    height: 10rem;
    border-radius: 15px;
    border: 2px solid transparent;
    transition: all .3s ease;

    ${respondTo.xs`
        width: 25rem;
        height: 15rem;
    `}

    ${respondTo.xl`
        width: 45rem;
        height: 20rem;
    `}

    &:hover {
        cursor: pointer;
        border: 2px solid ${colors.red};
    }
`

const IngredientDetails = ({
    loading,
    selectedRecipe,
    setSelectedRecipes,
}) => {
    const [fullRecipe, setFullRecipe] = React.useState(null)

    React.useEffect(
		() => {
			window.contract.getRecipe({ recipeId: selectedRecipe })
            .then(recipeFromContract => {
                if (recipeFromContract === null) {
                    return setFullRecipe(null)
                }
                return setFullRecipe(recipeFromContract)
            })
		},
		[loading]
    )

    return (
        <>
            {fullRecipe === null ? <P1 color={colors.white}>Loading...</P1>
            : (
                <Box3 marginTop={50}>
                    <Flex direction={'column'}>
                        <div>
                            <Button4 color={colors.yellow} onClick={() => setSelectedRecipes(null)}>View All Recipes</Button4>
                        </div>
                        <Box3 marginTop={50} marginBottom={25}>
                            <H2 color={colors.yellow}>{fullRecipe.title}</H2>
                        </Box3>
                        <Box3 marginTop={25}>
                            <Box3 marginBottom={15}>
                                <P1 color={colors.red}>Ingredients:</P1>
                            </Box3>
                            <P3 color={colors.white}>{fullRecipe.ingredients}</P3>
                        </Box3>
                        <Box3 marginTop={50}>
                            <Box3 marginBottom={15}>
                                <P1 color={colors.red}>Instructions:</P1>
                            </Box3>
                            <P3 color={colors.white}>{fullRecipe.instructions}</P3>
                        </Box3>
                    </Flex>
                </Box3>
            )}
        </>
    )
}
