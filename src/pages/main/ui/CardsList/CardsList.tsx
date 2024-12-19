import { observer } from 'mobx-react';
import { TaskCard } from '../../../../shared/ui/TaskCard/TaskCard';
import { TaskListContainer } from './styles';
import { taskStore } from '../../../../shared/store';

export const CardList = observer(() => {
  const { tasks } = taskStore;

  return (
    <TaskListContainer>
      {tasks.length > 0 &&
        tasks.map((card) => (
          <TaskCard
            key={card.id}
            title={card.title}
            description={card.description}
            priority={card.priority}
            status={card.status}
            onDelete={() => taskStore.deleteTask(card.id)}
            onStatusChange={(newStatus) =>
              taskStore.updateTask({ ...card, status: newStatus })
            }
          />
        ))}
    </TaskListContainer>
  );
});
