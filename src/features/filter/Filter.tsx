import { observer } from 'mobx-react-lite';
import { TaskPriorityChip } from '../../shared/ui/TaskPriorityChip/TaskPriorityChip';
import { taskStore } from '../../shared/store';
import { StyledPriorityLabel } from '../../pages/main/ui/CreateTaskForm/styles';
import { FilterContainer, StyledButton } from './styles';

export const Filter = observer(() => {
  const handleFilterChange = async (priority: 'low' | 'medium' | 'high') => {
    await taskStore.filterTasks('priority', priority);
  };

  const handleClearFilter = () => {
    taskStore.clearFilter();
  };

  return (
    <FilterContainer>
      <StyledPriorityLabel>Filter by:</StyledPriorityLabel>
      <TaskPriorityChip
        variant="radio"
        value="low"
        onChange={() => handleFilterChange('low')}
        isActive={taskStore.activeFilter.value === 'low'}
      />
      <TaskPriorityChip
        variant="radio"
        value="medium"
        onChange={() => handleFilterChange('medium')}
        isActive={taskStore.activeFilter.value === 'medium'}
      />
      <TaskPriorityChip
        variant="radio"
        value="high"
        onChange={() => handleFilterChange('high')}
        isActive={taskStore.activeFilter.value === 'high'}
      />
      <StyledButton onClick={handleClearFilter}>Clear</StyledButton>
    </FilterContainer>
  );
});
