import { Form, Field } from 'react-final-form'
import styles from './form.module.css'
const LoginForm =(props)=> {
    const onSubmit= ()=> {}
    return (
<Form onSubmit={onSubmit}>
    
          {props => (
            <form onSubmit={props.handleSubmit}>
             <div className={styles.login}>
               <Field  placeholder={'login'} name="login" component="input" />
             </div>
             <div className={styles.pass}>
             <Field placeholder={'password'} name="password" component="input" />
             </div>
             <div className={styles.remindMe}>
             <Field  name='Remind me' type = {'checkbox'}component="input" />
             </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Form>
    )
}


export default LoginForm
