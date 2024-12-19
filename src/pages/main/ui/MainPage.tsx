import { CardList } from './CardsList/CardsList';
import { CreateTaskForm } from './CreateTaskForm/CreateTaskForm';
import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <CreateTaskForm />
      <CardList />
    </MainPageContainer>
  );
};
