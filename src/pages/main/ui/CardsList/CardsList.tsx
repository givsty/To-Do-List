import { TaskCard } from '../../../../shared/ui/TaskCard/TaskCard';
import { TaskListContainer } from './styles';

export const CardList = () => {
  const taskCardsArray: Array<TaskCard> = [
    {
      id: 1,
      title: 'Помыть посуду',
      description: 'А то мама оторвет башку',
      priority: 'high',
      status: false,
    },
    {
      id: 2,
      title: 'Заказать альтушку на госууслугах',
      description: 'Я уже взрослый скуф и в чате WOT мужики сказали что пора',
      priority: 'medium',
      status: false,
    },
    {
      id: 3,
      title: 'Выпить сиську пива',
      description: 'Ведь в пиве много полезных электролитов',
      priority: 'low',
      status: true,
    },
  ];

  return (
    <TaskListContainer>
      {taskCardsArray.length > 0 &&
        taskCardsArray.map((card) => (
          <TaskCard
            key={card.id}
            title={card.title}
            description={card.description}
            priority={card.priority}
            status={card.status}
            onDelete={() => {
              console.log(`Task with id ${card.id} deleted`);
            }}
            onStatusChange={(newStatus) => {
              console.log(`${newStatus}`);
            }}
          />
        ))}
    </TaskListContainer>
  );
};
