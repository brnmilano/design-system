import { styled } from '../../styles'

export const TooltipText = styled('div', {
  backgroundColor: '$gray900',
  color: '$white',
  width: '220px',
  textAlign: 'center',
  lineHeight: '$tall',
  borderRadius: '$xs',
  cursor: 'pointer',
  marginTop: '$40',
  fontFamily: '$default',
})

export const TooltipBox = styled('div', {
  position: 'absolute',
  bottom: 'calc(100% + 15px)',
  left: '0',
  visibility: 'hidden',
  color: 'transparent',
  backgroundColor: 'transparent',
  width: '220px',
  borderRadius: '$xs',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$shorter',

  '&:before': {
    content: '""',
    width: 0,
    height: 0,
    left: '$22',
    bottom: '-10px',
    position: 'absolute',
    border: '10px solid transparent',
    transform: 'rotate(315deg)',
  },
})

export const TooltipCard = styled('div', {
  position: 'relative',

  [`& ${TooltipText}:hover + ${TooltipBox}`]: {
    visibility: 'visible',
    textAlign: 'center',
    color: '$white',
    backgroundColor: '$gray900',
    width: '220px',
    fontSize: '$sm',

    '&:before': {
      borderColor: 'transparent transparent $gray900 $gray900',
    },
  },
})
