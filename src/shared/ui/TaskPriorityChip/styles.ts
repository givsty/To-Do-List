import styled from '@emotion/styled';

export const RadioLabel = styled('label')<{ color: string }>(({ color }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
  borderRadius: '37px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#ffffff',
  textAlign: 'center',
  cursor: 'pointer',
  width: '76px',
  height: '43px',
  input: {
    display: 'none',
  },
}));

export const Chip = styled('div')<{ color: string }>(({ color }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
  borderRadius: '35px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#ffffff',
  textAlign: 'center',
  width: '65px',
  height: '37px',
}));
