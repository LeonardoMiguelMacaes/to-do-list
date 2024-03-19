import './App.css'
import TaskContextProvider from './_context/TaskContext'
import AppPanel from './components/AppPanel'
import Landing from './components/Landing'
import TaskComponent from './components/Task'
import TasksPanel from './components/TasksPanel'

function App() {

  return (
    <div className="app">
      <TaskContextProvider>
        <AppPanel/>
      </TaskContextProvider>
    </div>
  )
}

export default App
