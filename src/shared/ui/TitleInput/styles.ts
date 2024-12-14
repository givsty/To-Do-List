import styled from '@emotion/styled';

export const InputContainer = styled('div')<{ error: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '90px',
  padding: '10px 20px',
  minHeight: '74px',
  backgroundColor: props.error ? '#CC3300' : '#69A0F3',
  transition: 'background-color 0.3s ease',
  width: '100%',
}));

export const StyledInput = styled('input')({
  background: 'none',
  border: 'none',
  borderBottom: '1px solid #fff',
  outline: 'none',
  color: '#fff',
  fontSize: '16px',
  width: '100%',
  '::placeholder': {
    color: '#fff',
    opacity: 0.8,
  },
});

export const StyledErrorMessage = styled('p')({
  color: '#fff',
  fontSize: '12px',
  marginTop: '5px',
});
