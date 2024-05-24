import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AllPost from './pages/AllPost.jsx'
import EditPost from './pages/EditPost.jsx'
import { AuthLayout, Login } from './components/index.js'
import Singnup from './pages/Singnup.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'

// const  router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<App/>}>
//     <Route path='/' element={<Home/>} />
//     <Route path='/login' element={<Login/> } />
//     <Route path='/signup' element={<AuthLayout authentication={false}> <Singnup/> </AuthLayout>} />

//     <Route path='/all-posts' element={<AuthLayout authentication={true}><AllPost/> </AuthLayout>} />
//     <Route path='/add-post' element={<AuthLayout authentication={true}> <AddPost/> </AuthLayout>} />
//     <Route path='/edit-post/:slug' element={<AuthLayout authentication={true}> <EditPost/> </AuthLayout>} />
//     <Route path='/post/:slug' element={<AuthLayout authentication={true}> <Post/> </AuthLayout>} />

    
//     {/* <Route path='/posts/' element={<AllPost/>}>
//       <Post path='edit/:slug' component={<EditPost/>} />
//     </Route> */}
//   </Route>
// ))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Singnup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router= {router}/>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
