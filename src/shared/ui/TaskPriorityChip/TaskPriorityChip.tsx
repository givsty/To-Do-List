import React from 'react';
import { Chip, RadioLabel } from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';

type TaskPriorityChipProps = {
  variant: 'radio' | 'chip';
  value: 'low' | 'medium' | 'high';
  register?: UseFormRegisterReturn;
};

const priorityStyles = {
  low: { color: '#339900', text: 'Low' },
  medium: { color: '#FFCD06', text: 'Medium' },
  high: { color: '#CC3300', text: 'High' },
};

export const TaskPriorityChip: React.FC<TaskPriorityChipProps> = ({
  variant,
  value,
  register,
}) => {
  const { color, text } = priorityStyles[value];

  return (
    <>
      {variant === 'radio' ? (
        <RadioLabel color={color}>
          <input type="radio" value={value} {...register} />
          {text}
        </RadioLabel>
      ) : (
        <Chip color={color}>{text}</Chip>
      )}
    </>
  );
};
