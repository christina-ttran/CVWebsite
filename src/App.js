import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import HomePage from './Containers/HomePage/HomePage';
import Resume from './Containers/Resume/Resume';
import WritingPortfolio from './Containers/Writing Portfolio/WritingPortfolio';
import Projects from './Containers/Projects/Projects';

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/Projects', element: <Projects/>},
  {path: '/Resume', element: <Resume/>},
  {path: '/WritingPortfolio', element: <WritingPortfolio/>},
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
