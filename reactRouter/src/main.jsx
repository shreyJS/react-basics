import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
/* way 01 : using array of objects inside createBrowserRouter()
this object represents path and its children to be passed inside <Outlet/> component.
*/
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[{
//       path:"",
//       element: <Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element: <Contact/>
//     },{
//       // dynamic param will be used in the element component by useParams()
//       path:"user/:abc",
//       element: <User/>
//     },{
//       path:"github",
//       element: <Github/>,
//       loader: githubInfoLoader
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
