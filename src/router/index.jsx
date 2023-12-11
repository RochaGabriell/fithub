import { createBrowserRouter } from 'react-router-dom'

import Base from '../layouts/Base'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
// import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import Exercises from '../pages/Exercises'

import FormWorkoutPage from '../pages/FormWorkoutPage'
import WorkoutForm from '../components/WorkoutForm'

// import Tools from '../pages/Tools'
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
            element: <Exercises />
          },
          {
            path: '/workouts',
            element: <Workouts />
          },
          {
            path: '/ManagerWorkout',
            element: <FormWorkoutPage />,
            children: [
              {
                path: '/ManagerWorkout/',
                element: <WorkoutForm />
              },
              {
                path: '/ManagerWorkout/workout/:id',
                element: <h1>Workout</h1>
              },
              {
                path: '/ManagerWorkout/workout_day',
                element: <h1>Dia de treino</h1>
              },
              {
                path: '/ManagerWorkout/workout_day/:id',
                element: <h1>Dia de treino</h1>
              },
              {
                path: '/ManagerWorkout/day_exercise',
                element: <h1>Dia de exercicio</h1>
              },
              {
                path: '/ManagerWorkout/day_exercise/:id',
                element: <h1>Dia de exercicio</h1>
              }
            ]
          },
          {
            path: '/exercises',
            element: <Exercises />
          },
          // {
          //   path: '/tools',
          //   element: <Tools />
          // },
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
