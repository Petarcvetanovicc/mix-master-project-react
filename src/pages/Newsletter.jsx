import axios from 'axios'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    toast.error('please provide all values')
    return error
  }
}
const Newsletter = () => {
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'
  return (
    <Form className="form-container" method="POST">
      <h4>Our Newsletter</h4>
      <div className="form-rows">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-rows">
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input type="text" name="lastName" id="lastName" required />
      </div>
      <div className="form-rows">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
        />
      </div>
      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  )
}
export default Newsletter
