import { createBrowserRouter } from 'react-router-dom'

import Base from '../layouts/Base'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import Exercises from '../pages/Exercises'
import Tools from '../pages/Tools'
import Profile from '../pages/Profile'

import Measurements from '../pages/Measurements'
import MyMeasurements from '../components/MyMeasurements'
import FormMeasurements from '../components/FormMeasurements'
import AllMeasurements from '../components/AllMeasurements'

import About from '../pages/About'
import NotFound from '../pages/NotFound'

import PrivateRoute from './privateRoute'
import { AuthProvider } from '../context/AuthContext'

const routes = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Base />
          </PrivateRoute>
        ),
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/workouts',
            element: <Workouts />
          },
          {
            path: '/exercises',
            element: <Exercises />
          },
          {
            path: '/tools',
            element: <Tools />
          },
          {
            path: '/profile',
            element: <Profile />
          },
          {
            path: '/measurements',
            element: <Measurements />,
            children: [
              {
                path: '/measurements',
                element: <MyMeasurements />
              },
              {
                path: '/measurements/form',
                element: <FormMeasurements />
              },
              {
                path: '/measurements/form/:id',
                element: <FormMeasurements />
              },
              {
                path: '/measurements/all',
                element: <AllMeasurements />
              }
            ]
          }
        ]
      },
      {
        path: '/',
        element: <Base />,
        children: [
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/register',
            element: <Register />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '*',
            element: <NotFound />
          }
        ]
      }
    ]
  }
])

export default routes
