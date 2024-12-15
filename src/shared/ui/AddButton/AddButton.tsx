import React from 'react';
import { ButtonContainer, PlusIcon } from './styles';

type AddButtonProps = {
  disabled?: boolean;
};

export const AddButton: React.FC<AddButtonProps> = ({ disabled = false }) => {
  return (
    <ButtonContainer type="submit" disabled={disabled}>
      <PlusIcon>+</PlusIcon>
    </ButtonContainer>
  );
};
