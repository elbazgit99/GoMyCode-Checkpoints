import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import FilterButtons from './components/FilterButtons';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4 font-sans antialiased">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-xl shadow-2xl space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 leading-tight">
          Redux ToDo <span className="text-purple-600">App</span>
        </h1>

        <AddTask />
        <FilterButtons />
        <ListTask />
      </div>
    </div>
  );
};

export default App;
