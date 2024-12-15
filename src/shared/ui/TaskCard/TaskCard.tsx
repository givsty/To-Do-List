import React from 'react';
import { TaskPriorityChip } from '../TaskPriorityChip/TaskPriorityChip';
import {
  CardContainer,
  CardHeader,
  CardInnerContainer,
  Checkmark,
  DeleteButton,
  Description,
  StatusButton,
  StyledCheckbox,
  StyledPriorityContainer,
  Title,
} from './styled';

export type TaskCard = {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: boolean;
};

type TaskCardProps = Omit<TaskCard, 'id'> & {
  onDelete: () => void;
  onStatusChange: (status: boolean) => void;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  priority,
  status,
  onDelete,
  onStatusChange,
}) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStatusChange(e.target.checked);
  };

  return (
    <CardContainer>
      <CardInnerContainer>
        <CardHeader>
          <Title>{title}</Title>
          <StyledPriorityContainer>
            <StatusButton
              completed={status}
              onClick={() => onStatusChange(!status)}
            >
              <StyledCheckbox>
                <input
                  type="checkbox"
                  checked={status}
                  onChange={handleStatusChange}
                />
                <Checkmark checked={status} />
              </StyledCheckbox>
            </StatusButton>
            <TaskPriorityChip value={priority} variant="chip" />
          </StyledPriorityContainer>
        </CardHeader>
        <Description>{description}</Description>
      </CardInnerContainer>
      <DeleteButton onClick={onDelete}>DELETE</DeleteButton>
    </CardContainer>
  );
};
