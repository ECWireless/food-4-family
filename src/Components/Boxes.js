import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Box1 = styled.div`
    ${props =>
        css`
            height: ${props.height};
            width: ${props.width * .4}px;
            margin-top: ${props.marginTop * .4}px;
            margin-bottom: ${props.marginBottom * .4}px;
            margin-left: ${props.marginLeft * .4}px;
            margin-right: ${props.marginRight * .4}px;
            padding-left: ${props.paddingLeft * .4}px;
            padding-right: ${props.paddingRight * .4}px;
            padding-top: ${props.paddingTop * .4}px;
            padding-bottom: ${props.paddingBottom * .4}px;

            ${respondTo.xs`
                width: ${props.width * .45}px;
                margin-top: ${props.marginTop * .45}px;
                margin-bottom: ${props.marginBottom * .45}px;
                margin-left: ${props.marginLeft * .45}px;
                margin-right: ${props.marginRight * .45}px;
                padding-left: ${props.paddingLeft * .45}px;
                padding-right: ${props.paddingRight * .45}px;
                padding-top: ${props.paddingTop * .45}px;
                padding-bottom: ${props.paddingBottom * .45}px;
            `}
            
            ${respondTo.sm`
                width: ${props.width * .7}px;
                margin-top: ${props.marginTop * .7}px;
                margin-bottom: ${props.marginBottom * .7}px;
                margin-left: ${props.marginLeft * .7}px;
                margin-right: ${props.marginRight * .7}px;
                padding-left: ${props.paddingLeft * .7}px;
                padding-right: ${props.paddingRight * .7}px;
                padding-top: ${props.paddingTop * .7}px;
                padding-bottom: ${props.paddingBottom * .7}px;
            `}

            ${respondTo.md`
                width: ${props.width}px;
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                margin-right: ${props.marginRight}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
                padding-top: ${props.paddingTop}px;
                padding-bottom: ${props.paddingBottom}px;
            `}

            ${respondTo.xl`
                width: ${props.width * 1.4}px;
            `}
        `};
`

export const Box2 = styled.div`
    ${props =>
        css`
            width: ${props.width * .6}px;
            margin-top: ${props.marginTop * .5}px;
            margin-bottom: ${props.marginBottom * .5}px;
            margin-left: ${props.marginLeft * .5}px;
            margin-right: ${props.marginRight * .5}px;
            padding-top: ${props.paddingTop * .5}px;
            padding-bottom: ${props.paddingBottom * .5}px;

            ${respondTo.xs`
                width: ${props.width * .7}px;
                margin-top: ${props.marginTop * .45}px;
                margin-bottom: ${props.marginBottom * .45}px;
                margin-left: ${props.marginLeft * .45}px;
                margin-right: ${props.marginRight * .45}px;
                padding-top: ${props.paddingTop * .45}px;
                padding-bottom: ${props.paddingBottom * .45}px;
            `}
            
            ${respondTo.sm`
                width: ${props.width}px;
                margin-top: ${props.marginTop * .7}px;
                margin-bottom: ${props.marginBottom * .7}px;
                margin-left: ${props.marginLeft * .7}px;
                margin-right: ${props.marginRight * .7}px;
                padding-top: ${props.paddingTop * .7}px;
                padding-bottom: ${props.paddingBottom * .7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                margin-right: ${props.marginRight}px;
                padding-top: ${props.paddingTop}px;
                padding-bottom: ${props.paddingBottom}px;
            `}

            ${respondTo.xl`
                width: ${props.width * 1.4}px;
            `}
        `};
`

export const Box3 = styled.div`
    ${props =>
        css`
            width: ${props.width * .45}px;
            margin-top: ${props.marginTop * .7}px;
            margin-bottom: ${props.marginBottom * .7}px;
            margin-left: ${props.marginLeft * .7}px;
            margin-right: ${props.marginRight * .7}px;
            padding-top: ${props.paddingTop * .7}px;
            padding-bottom: ${props.paddingBottom * .7}px;
            padding-left: ${props.paddingLeft * .7}px;
            padding-right: ${props.paddingRight * .7}px;

            ${respondTo.xs`
                width: ${props.width * .6}px;
                margin-top: ${props.marginTop * .8}px;
                margin-bottom: ${props.marginBottom * .8}px;
                margin-left: ${props.marginLeft * .8}px;
                margin-right: ${props.marginRight * .8}px;
                padding-top: ${props.paddingTop * .8}px;
                padding-bottom: ${props.paddingBottom * .8}px;
                padding-left: ${props.paddingLeft * .8}px;
                padding-right: ${props.paddingRight * .8}px;
            `}
            
            ${respondTo.sm`
                width: ${props.width * .8}px;
                margin-top: ${props.marginTop * .9}px;
                margin-bottom: ${props.marginBottom * .9}px;
                margin-left: ${props.marginLeft * .9}px;
                margin-right: ${props.marginRight * .9}px;
                padding-top: ${props.paddingTop * .9}px;
                padding-bottom: ${props.paddingBottom * .9}px;
                padding-left: ${props.paddingLeft * .9}px;
                padding-right: ${props.paddingRight * .9}px;
            `}

            ${respondTo.md`
                width: ${props.width}px;
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                margin-right: ${props.marginRight}px;
                padding-top: ${props.paddingTop}px;
                padding-bottom: ${props.paddingBottom}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
            `}

            ${respondTo.xl`
                width: ${props.width * 1.5}px;
            `}
        `};
`
