import styled from '@emotion/styled';

export const StyledPriorityLabel = styled('label')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#69A0F3',
  borderRadius: '35px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#ffffff',
  fontWeight: 'bold',
  textAlign: 'center',
  height: '43px',
});

export const StyledDescriptionLabel = styled('label')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#69A0F3',
  borderRadius: '35px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#ffffff',
  fontWeight: 'bold',
  textAlign: 'center',
  height: '73px',
});

export const StyledDescriptionInput = styled('input')({
  backgroundColor: 'transparent',
  borderRadius: '20px',
  padding: '10px 15px',
  fontSize: '16px',
  color: '#ffffff',
  border: '2px solid #69A0F3',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease, transform 0.2s ease',
  textAlign: 'left',
  height: '63px',

  '&::placeholder': {
    color: '#000000',
    opacity: 0.8,
  },

  '&:focus': {
    borderColor: '#558FD3',
    transform: 'scale(1.02)',
  },
});

export const TaskListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  width: '100%',
  boxSizing: 'border-box',
});
