import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages'
import Error from './pages/Error'
import { loader as landingLoader } from './pages/Landing'
import { loader as cocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader(queryClient),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
export default App
