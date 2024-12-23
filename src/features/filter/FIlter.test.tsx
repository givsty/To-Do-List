import { render, screen, fireEvent } from '@testing-library/react';
import { taskStore } from '../../shared/store';
import { Filter } from './Filter';

jest.mock('../../shared/store', () => ({
  taskStore: {
    filterTasks: jest.fn(),
    clearFilter: jest.fn(),
    activeFilter: { value: '' },
  },
}));

describe('Filter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders filter options and clear button', () => {
    render(<Filter />);

    expect(screen.getByText('Filter by:')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('calls filterTasks when a priority is selected', () => {
    render(<Filter />);

    fireEvent.click(screen.getByText('Low'));
    expect(taskStore.filterTasks).toHaveBeenCalledWith('priority', 'low');

    fireEvent.click(screen.getByText('Medium'));
    expect(taskStore.filterTasks).toHaveBeenCalledWith('priority', 'medium');

    fireEvent.click(screen.getByText('High'));
    expect(taskStore.filterTasks).toHaveBeenCalledWith('priority', 'high');
  });

  it('calls clearFilter when Clear button is clicked', () => {
    render(<Filter />);

    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));
    expect(taskStore.clearFilter).toHaveBeenCalled();
  });
});
