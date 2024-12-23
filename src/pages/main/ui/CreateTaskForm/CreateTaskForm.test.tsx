import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateTaskForm } from './CreateTaskForm';
import { taskStore } from '../../../../shared/store';

jest.mock('../../../../shared/store', () => ({
  taskStore: {
    addTask: jest.fn(),
  },
}));

describe('CreateTaskForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form elements correctly', () => {
    render(<CreateTaskForm />);
  
    expect(screen.getByPlaceholderText('Enter description here...')).toBeInTheDocument();
    expect(screen.getByText('Priority:')).toBeInTheDocument();
    expect(screen.getByLabelText('Low')).toBeInTheDocument();
    expect(screen.getByLabelText('Medium')).toBeInTheDocument();
    expect(screen.getByLabelText('High')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });
  

  it('shows validation errors for empty fields', async () => {
    render(<CreateTaskForm />);

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    await waitFor(() => {
      expect(screen.getByText('Title is required')).toBeInTheDocument();
      expect(screen.getByText('Description is required')).toBeInTheDocument();
    });
  });

  it('shows validation errors for invalid inputs', async () => {
    render(<CreateTaskForm />);

    fireEvent.input(screen.getByPlaceholderText('Enter title here...'), {
      target: { value: 'a' },
    });
    fireEvent.input(screen.getByPlaceholderText('Enter description here...'), {
      target: { value: 'b' },
    });

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    await waitFor(() => {
      expect(screen.getByText('Title must be at least 3 characters')).toBeInTheDocument();
      expect(screen.getByText('Description must be at least 3 characters')).toBeInTheDocument();
    });
  });

  it('submits valid data and resets the form', async () => {
    render(<CreateTaskForm />);

    fireEvent.input(screen.getByPlaceholderText('Enter title here...'), {
      target: { value: 'Valid Title' },
    });
    fireEvent.click(screen.getByText('Medium'));
    fireEvent.input(screen.getByPlaceholderText('Enter description here...'), {
      target: { value: 'Valid Description' },
    });

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    await waitFor(() => {
      expect(taskStore.addTask).toHaveBeenCalledWith({
        title: 'Valid Title',
        priority: 'medium',
        description: 'Valid Description',
        status: false,
      });
    });

    expect(screen.getByPlaceholderText('Enter title here...')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter description here...')).toHaveValue('');
  });
});
