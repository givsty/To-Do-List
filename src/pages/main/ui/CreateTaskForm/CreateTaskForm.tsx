import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TitleInput } from '../../../../shared/ui';
import { AddButton } from '../../../../shared/ui/AddButton';
import {
  StyledDescriptionInput,
  StyledDescriptionLabel,
  StyledPriorityLabel,
} from './styles';
import { TaskPriorityChip } from '../../../../shared/ui/TaskPriorityChip/TaskPriorityChip';
import { taskStore } from '../../../../shared/store';
import { Task } from '../../../../entities/task';

const validationSchema = Joi.object({
  title: Joi.string().min(3).max(40).required().messages({
    'string.empty': 'Title is required',
    'string.min': 'Title must be at least 3 characters',
    'string.max': 'Title must not exceed 40 characters',
  }),
  priority: Joi.string().valid('low', 'medium', 'high').required().messages({
    'any.only': 'Priority must be low, medium, or high',
    'string.empty': 'Priority is required',
  }),
  description: Joi.string().min(3).max(300).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description must be at least 3 characters',
    'string.max': 'Description must not exceed 300 characters',
  }),
  status: Joi.boolean(),
});

export const CreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Task>({
    resolver: joiResolver(validationSchema),
    defaultValues: {
      title: '',
      priority: 'low',
      description: '',
      status: false,
    },
  });

  const onSubmit: SubmitHandler<Task> = (data) => {
    taskStore.addTask(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <TitleInput
        placeholder="Enter title here..."
        id="title"
        register={register('title')}
        error={errors.title?.message}
      />
      <AddButton disabled={isSubmitting} />
      <div>
        <StyledPriorityLabel>Priority:</StyledPriorityLabel>
        <div>
          <TaskPriorityChip
            variant="radio"
            value="low"
            register={register('priority')}
          />
          <TaskPriorityChip
            variant="radio"
            value="medium"
            register={register('priority')}
          />
          <TaskPriorityChip
            variant="radio"
            value="high"
            register={register('priority')}
          />
        </div>
        {errors.priority && <p>{errors.priority.message}</p>}
      </div>
      <div>
        <StyledDescriptionLabel htmlFor="description">
          Description
        </StyledDescriptionLabel>
        <StyledDescriptionInput
          placeholder="Enter description here..."
          id="description"
          {...register('description')}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
    </form>
  );
};
