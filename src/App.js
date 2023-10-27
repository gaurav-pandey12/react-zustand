import './App.css';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList';

function App() {
  return (
    <div className="App">
      <h1>My Course List</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
