import 'regenerator-runtime/runtime'
import React from 'react'
import '../global.css'

// Components
import { colors } from './theme'
import { Box3 } from './Boxes'
import { Button2 } from './Buttons'
import { Flex } from './Containers'
import { H3 } from './Typography'

const Filters = ({
    filter,
    setFilter,
}) => {
    return (
        <>
            <Box3 marginTop={75}>
                <H3 center color={colors.white}>
                    Search by:
                </H3>
            </Box3>
            <Flex justify={'center'} align={'center'}>
                <Box3 width={800} marginTop={50}>
                    <Flex justify={'space-between'}>
                        <Button2 onClick={() => setFilter('recipes')} active={filter === 'recipes'}>
                            Recipes
                        </Button2>
                        <Button2 onClick={() => setFilter('families')} active={filter === 'families'}>
                            Familes
                        </Button2>
                        <Button2 onClick={() => setFilter('authors')} active={filter === 'authors'}>
                            Authors
                        </Button2>
                    </Flex>
                </Box3>
            </Flex>
        </>
    )
}

export default Filters
