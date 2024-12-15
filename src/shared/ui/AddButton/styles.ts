import styled from '@emotion/styled';

export const ButtonContainer = styled('button')<{ disabled: boolean }>(
  ({ disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: disabled ? '#B0C4DE' : '#69A0F3',
    border: 'none',
    borderRadius: '50%',
    width: '74px',
    height: '74px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',

    '&:hover': {
      backgroundColor: disabled ? '#B0C4DE' : '#4D8CE4',
    },

    '&:active': {
      transform: disabled ? 'none' : 'scale(0.95)',
    },
  })
);

export const PlusIcon = styled('span')({
  fontSize: '40px',
  color: '#FFFFFF',
  fontWeight: 'bold',
  lineHeight: 1,
  textAlign: 'center',
});
