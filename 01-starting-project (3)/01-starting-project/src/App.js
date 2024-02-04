import Users from './components/Users';

function App () {
  return (
    <div>
      <Users />
    </div>
  );
}

const PORT = 3000;
App.listen (PORT, () => {
  console.log (`Server is running on port ${PORT}`);
});

export default App;
