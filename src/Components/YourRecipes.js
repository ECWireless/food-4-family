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

const YourRecipes = ({
    loading,
    setLoading,
}) => {
    const [recipes, setRecipes] = React.useState([])
    const [selectedRecipe, setSelectedRecipes] = React.useState(null)
    const [viewRecipes, setViewRecipes] = React.useState(false)
    
    React.useEffect(
		() => {
			window.contract.getAllRecipes()
			.then(allRecipes => {
                let yourRecipes = allRecipes.filter(function(recipe) {
                    return recipe.author === window.accountId;
                })

                if (yourRecipes.length < 1) {
                    return setRecipes(null)
                }
                return setRecipes(yourRecipes)
            })
		},
		[loading]
    )
    
    return (
        <>
            {recipes === null
                ? (
                    <Box3 marginTop={25}>
                        <P1 color={colors.white}>You have no recipes.</P1>
                    </Box3>
                )
                : viewRecipes
                    ? selectedRecipe === null
                        ? (
                            <>
                                <Box3 marginTop={25}>
                                    <Button4 onClick={() => setViewRecipes(false)} color={colors.yellow}>Hide Recipes:</Button4>
                                </Box3>
                                <Flex wrap={'true'}>
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
                                </Flex>
                            </>
                        )
                        : (
                            <IngredientDetails
                                loading={loading}
                                setLoading={setLoading}
                                setSelectedRecipes={setSelectedRecipes}
                                selectedRecipe={selectedRecipe}
                            />
                        )
                    : (
                        <Box3 marginTop={25}>
                            <Button4 onClick={() => setViewRecipes(true)} color={colors.yellow}>View Your Recipes:</Button4>
                        </Box3>
                    )
            }
        </>
    )
}

export default YourRecipes

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
    setLoading,
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

    const onDeleteGlobalRecipe = (recipeId) => {
		setLoading(true)
		window.contract.deleteGlobalRecipe({ id: recipeId })
		.then(() => {
            setLoading(false)
		})
	}

    return (
        <>
            {fullRecipe === null ? <P1 color={colors.white}>Loading...</P1>
            : (
                <Box3 marginTop={50}>
                    <Flex direction={'column'}>
                        <div>
                            <Button4 color={colors.yellow} onClick={() => setSelectedRecipes(null)}>View all your recipes</Button4>
                        </div>
                        <Box3 marginTop={50}>
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
                        <Box3 marginTop={50}>
                            <Button4 onClick={onDeleteGlobalRecipe.bind(this, fullRecipe.id)}>Delete recipe</Button4>
                        </Box3>
                    </Flex>
                </Box3>
            )}
        </>
    )
}
