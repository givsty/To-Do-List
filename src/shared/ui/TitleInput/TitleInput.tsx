import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InputContainer, StyledErrorMessage, StyledInput } from './styles';

type TextInputProps = {
  placeholder: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
};

export const TitleInput: React.FC<TextInputProps> = ({
  placeholder,
  id,
  register,
  error,
}) => {
  return (
    <InputContainer error={!!error}>
      <StyledInput placeholder={placeholder} id={id} {...register} />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </InputContainer>
  );
};
