import { styled } from "@stitches/react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string,
  color?: 'default'| 'primary' | 'secondary' | 'danger' | 'outline' | 'text',
  size?: 'sm' | 'md' | 'lg' | 'xl',
  disableShadow?: boolean,
  disabled?: boolean
}

export default function Button({ 
  text='Button', 
  color='default',
  size='md',
  disableShadow, 
  disabled 
}: buttonProps) {
  return (
    <ButtonComponent 
      color={color}
      size={size}
      style={disableShadow ? { boxShadow: 'none' } : {boxShadow: ''}} 
      disabled={disabled}
    >
      {text}
    </ButtonComponent>
  )
}

const ButtonComponent = styled('button', {
  fontSize: '0.875rem',
  fontWeight: 500,
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 250ms ease-in-out',

  '&:disabled': {
    backgroundColor: '#e0e0e0',
    color: '#9e9e9e',
    '&:hover': {
      backgroundColor: '#e0e0e0',
      color: '#9e9e9e'  
    }
  },

  variants: {
    color: {
      default: {
        color: '#3f3f3f',
        backgroundColor: '#e0e0e0',
        boxShadow: '0px 2px 3px 0px #33333333',
        '&:hover': { backgroundColor: '#aeaeae' },
        '&:focus': { backgroundColor: '#aeaeae' }
      },
      primary: {
        backgroundColor: '#2962ff',
        color: '#fff',
        boxShadow: '0px 2px 3px 0px #2962FF33',
        '&:hover': { backgroundColor: '#0039CB' },
        '&:focus': { backgroundColor: '#0039CB' }
      },
      secondary: {
        backgroundColor: '#455A64',
        color: '#fff',
        boxShadow: '0px 2px 3px 0px #455A6433',
        '&:hover': { backgroundColor: '#1C313A' },
        '&:focus': { backgroundColor: '#1C313A' }
      },
      danger: {
        backgroundColor: '#d32f2f',
        color: '#fff',
        boxShadow: '0px 2px 3px 0px #D32F2F33',
        '&:hover': { backgroundColor: '#9A0007' },
        '&:focus': { backgroundColor: '#9A0007' }
      },
      outline: {
        backgroundColor: 'transparent',
        color: '#3d5afe',
        border: '1px solid #3d5afe',
        '&:hover': { backgroundColor: '#2962ff1a' },
        '&:focus': { backgroundColor: '#2962ff1a' }
      },
      text: {
        backgroundColor: 'transparent',
        color: '#3d5afe',
        '&:hover': { backgroundColor: '#2962ff1a' },
        '&:focus': { backgroundColor: '#2962ff1a' },

        '&:disabled': {
          backgroundColor: 'transparent',
          color: '#9e9e9e',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#9e9e9e'  
          }
        },
      },
    },
    size: {
      sm: {
        width: '64px',
        height: '32px'
      },
      md: {
        width: '84px',
        height: '36px'
      },
      lg: {
        width: '100px',
        height: '42px'
      },
      xl: {
        width: '140px',
        height: '45px'
      }
    }
  }
});