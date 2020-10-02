import React from 'react'

// Components
import { colors } from './theme'
import { Flex } from './Containers'
import { P1 } from './Typography'

const Authors = ({
    filter,
    authors,
}) => {
    return (
        <>
            {filter === 'authors' && <Flex justify={'space-between'}>
                {
                    authors === null
                    ? <P1 color={colors.white}>There are no authors.</P1>
                    : (
                        authors.map((author, index) => (
                            <P1 color={colors.white} key={index}>{author.username}</P1>
                        ))
                    )
                }
            </Flex>}
        </>
    )
}

export default Authors
