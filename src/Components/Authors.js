import React from 'react'
import styled, { css } from 'styled-components'

// Components
import { colors, shadows } from './theme'
import { Box3 } from './Boxes'
import { Flex } from './Containers'
import { H3, P1 } from './Typography'

const Authors = ({
    filter,
    authors,
}) => {
    const [selectedUsername, setSelectedUsername] = React.useState(null)
    const [selectedSender, setSelectedSender] = React.useState(null)

    const onSelectedAuthor = (id) => {
        let authorObject = authors.filter(function(author) {
            return author.sender === id;
        })

        setSelectedUsername(authorObject[0].username)
        setSelectedSender(authorObject[0].sender)
    }

    return (
        <>
            {filter === 'authors' && selectedUsername === null &&
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
            {filter === 'authors' && selectedUsername !== null && (
                <Box3 marginTop={50}>
                    <button onClick={() => setSelectedUsername(null)}>View all authors</button>
                    <Box3 marginTop={50}>
                        <H3 color={colors.white}>{selectedUsername}</H3>
                        <P1 color={colors.white}>Account ID: {selectedSender}</P1>
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
    width: 20rem;
    height: 8rem;
    background: ${colors.white};
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 2rem;
    margin-right: 2rem;
    border-radius: 5px;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background: ${colors.green};
        box-shadow: ${shadows.card};

        p {
            color: ${colors.white};
        }
    }
`
