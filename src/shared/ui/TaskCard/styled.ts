import styled from '@emotion/styled';

export const CardContainer = styled('div')({
  backgroundColor: '#69A0F3',
  borderRadius: '37px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '15px',
  maxWidth: '600px',
  width: '100%',
  boxSizing: 'border-box',
});

export const CardInnerContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  padding: '20px 20px 0 20px',
});

export const CardHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const Title = styled('h3')({
  color: '#FFFFFF',
  fontSize: '21px',
  textDecoration: 'underline',
  margin: 0,
  textWrap: 'wrap',
});

export const StatusButton = styled('button')<{ completed: boolean }>(
  ({ completed }) => ({
    backgroundColor: completed ? '#33CC33' : '#CCCCCC',
    color: '#FFFFFF',
    borderRadius: '4px',
    border: 'none',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  })
);

export const Description = styled('p')({
  color: '#FFFFFF',
  fontSize: '13px',
  width: '100%',
  margin: '10px 0',
});

export const DeleteButton = styled('button')({
  backgroundColor: '#CC3300',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '0 0 37px 37px',
  padding: '15px 20px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '100%',
  height: '27px',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: '#AA0000',
  },
});

export const StyledCheckbox = styled('label')({
  position: 'relative',
  display: 'inline-block',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  input: {
    display: 'none',
  },
});

export const Checkmark = styled('span')<{ checked: boolean }>(
  ({ checked }) => ({
    position: 'absolute',
    top: 0,
    left: '-2px',
    width: '24px',
    height: '24px',
    backgroundColor: checked ? '#33CC33' : '#CCCCCC',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: '#FFFFFF',
    '&::after': {
      content: checked ? "'✔'" : '""',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  })
);

export const StyledPriorityContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
});
