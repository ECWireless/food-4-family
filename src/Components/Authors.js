import React from 'react'
import styled from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors, shadows } from './theme'
import { Box3 } from './Boxes'
import { Button4 } from './Buttons'
import { Flex } from './Containers'
import Recipes from './Recipes'
import { H3, H4, P1 } from './Typography'

const Authors = ({
    authors,
    recipes,
    loading,
    setLoading,
}) => {
    const [selectedUsername, setSelectedUsername] = React.useState(null)
    const [selectedSender, setSelectedSender] = React.useState(null)
    const [filteredRecipes, setFilteredRecipes] = React.useState(null)

    const onSelectedAuthor = (id) => {
        let authorObject = authors.filter(function(author) {
            return author.sender === id;
        })

        setSelectedUsername(authorObject[0].username)
        setSelectedSender(authorObject[0].sender)
        setFilteredRecipes(recipes.filter(function(recipe) {
            return recipe.author === id;
        }))
    }

    return (
        <>
            {selectedUsername === null &&
                (<>{
                    authors === null
                    ? <P1 center color={colors.white}>There are no authors.</P1>
                    : (
                        <Box3 marginTop={50}>
                            <Flex wrap={'true'}>
                                {authors.map(author => (
                                    <AuthorCard
                                        key={author.sender}
                                        onSelectedAuthor={onSelectedAuthor}
                                        sender={author.sender}
                                        username={author.username}
                                    />
                                ))}
                            </Flex>
                        </Box3>
                    )
                }</>)
            }
            {selectedUsername !== null && (
                <Box3 marginTop={50}>
                    <Button4 color={colors.yellow} onClick={() => setSelectedUsername(null)}>View all authors</Button4>
                    <Box3 marginTop={50}>
                        <H3 color={colors.white}>{selectedUsername}</H3>
                        <Box3 marginTop={25}>
                            <P1 color={colors.white}>Account ID: {selectedSender}</P1>
                        </Box3>
                        <Box3 marginTop={25}>
                            <H4 color={colors.red}>Their Recipes:</H4>
                            <Recipes
                                recipes={filteredRecipes}
                                loading={loading}
                                setLoading={setLoading}
                            />
                        </Box3>
                    </Box3>
                </Box3>
            )}
        </>
    )
}

export default Authors

const AuthorCard = ({
    username,
    sender,
    onSelectedAuthor,
}) => {
    return (
        <AuthorCardBackground onClick={onSelectedAuthor.bind(this, sender)}>
            <P1 color={colors.black}>{username}</P1>
        </AuthorCardBackground>
    )
}

const AuthorCardBackground = styled.div`
    width: 15rem;
    height: 5rem;
    background: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    border-radius: 5px;
    transition: all .3s ease;

    ${respondTo.xs`
        width: 15rem;
        height: 5rem;
        margin-right: 2rem;
    `}

    ${respondTo.sm`
        height: 6rem;
    `}

    ${respondTo.md`
        width: 18rem;
        height: 7rem;
    `}

    ${respondTo.lg`
        width: 20rem;
        height: 8rem;
    `}

    ${respondTo.xl`
        width: 25rem;
        height: 10rem;
    `}

    &:hover {
        cursor: pointer;
        background: ${colors.green};
        box-shadow: ${shadows.card};

        p {
            color: ${colors.white};
        }
    }
`
