import { Form, Field } from 'react-final-form'
import styles from './form.module.css'

import { loginData } from '../redux/loginReducer'

const LoginForm = (props) => {


  const onSubmit = (e) => {
    const { login, bio } = e


    props.dispatch(loginData(login, bio))

  }


  const validate = (e) => {
    const errors = {}
    if (e.bio && e.bio.length < 10) {

      errors.bio = 'Too short'
    }
    return errors;
  }
  const initialData = {
    login: ' Login',
    bio: ' it is my bio'
  }
  return (
    <div>
      <Form
        onSubmit={onSubmit}

        validate={validate}
        initialValues={initialData}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Login</label>
              <Field name="login" component="input" placeholder="Login" />
            </div>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <label>Bio</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              )}
            />

            <button type="submit">Submit</button>

          </form>

        )

        } />
    </div>
  )
}


export default LoginForm
