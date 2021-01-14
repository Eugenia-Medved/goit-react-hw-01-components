import './App.css';
import Container from 'components/Container/Container';
import UsersProfile from 'components/UsersProfile/User';
import Users from 'components/UsersProfile/user.json';
import Statistics from 'components/Statistics/Statistical-data';
import statisticalData from 'components/Statistics/statistical-data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <h2>Task 1</h2>
      <UsersProfile option={Users} />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
