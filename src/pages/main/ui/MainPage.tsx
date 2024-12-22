import { Filter } from '../../../features/filter/Filter';
import { CardList } from './CardsList/CardsList';
import { CreateTaskForm } from './CreateTaskForm/CreateTaskForm';
import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <CreateTaskForm />
      <Filter />
      <CardList />
    </MainPageContainer>
  );
};
