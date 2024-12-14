import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { TitleInput } from '../../../../shared/ui';

type FormValues = {
  title: string;
  priority: 'low' | 'medium' | 'high';
  description: string;
};

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
});

export const CreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: joiResolver(validationSchema),
    defaultValues: {
      title: '',
      priority: 'low',
      description: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form Data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitleInput
        placeholder="Enter title here..."
        id="title"
        register={register('title')}
        error={errors.title?.message}
      />
      <div>
        <label>Priority</label>
        <div>
          <label>
            <input type="radio" value="low" {...register('priority')} />
            Low
          </label>
          <label>
            <input type="radio" value="medium" {...register('priority')} />
            Medium
          </label>
          <label>
            <input type="radio" value="high" {...register('priority')} />
            High
          </label>
        </div>
        {errors.priority && <p>{errors.priority.message}</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          placeholder="Enter description here..."
          id="description"
          {...register('description')}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
