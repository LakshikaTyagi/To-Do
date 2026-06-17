import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import MyDay from './pages/MyDay/MyDay.jsx'
import Important from './pages/Important/Important.jsx'
import Planned from './pages/Planned/Planned.jsx'
import Assigned from './pages/Assigned/Assigned.jsx'
import Tasks from './pages/Tasks/Tasks.jsx'
import TaskProvider from './pages/TaskProvider/TaskProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = '/MyDay' element = {<MyDay/>}/>
      <Route path='important' element = {<Important/>}/>
      <Route path = 'planned' element = {<Planned/>} />
      <Route path='/assigned' element = {<Assigned/>} />
      <Route path='/tasks' element = {<Tasks/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <RouterProvider router = {router} />
    </TaskProvider>
  </StrictMode>,
)
