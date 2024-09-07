import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()
  console.log(error)
  return <div>There Was An Error</div>
}
export default SinglePageError
