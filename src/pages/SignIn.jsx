import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const {signin} = user_actions

export default function SignIn() {
  const navigate = useNavigate()
  const mail_signin = useRef();
  const password_signin = useRef();
  const dispatch = useDispatch()



  
  function handlerSignIn() {
    try {
      let data = {
        mail: mail_signin.current.value,
        password: password_signin.current.value,
      };
  
       dispatch (signin({data}))
      .then(res => {
        console.log(res)
        if (res.payload.token) {
          Swal.fire({
            icon: 'success',
            title: 'Logged In!',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/")
        } else if(res.payload.messages.length > 0){
          Swal.fire({
            title: 'Something went wrong!',
            icon: 'error',
            html: res.payload.messages.map(each =>`<p>${each}</p>`).join('')
          })
        }
      })

      .catch(err => console.log(err))

    } catch (error) {
      console.log(error)
    }
    
  }

  /* let user = useSelector(store=>store)
  console.log(user) */

   return (
    <div className="father-singup">
      <main className="main-form">

        <article>
          <h1 className="h1-form">My Tinerary</h1>
        </article>
        <aside className="father-form">
          <form className="container-form-signin">
            <h6 className="step-form"></h6>
            <h3 className="create-text">Sign In</h3>
            <p>New user? <Anchor to={"/signup"} href=""> Create an account</Anchor></p>
            <div className="row mb-3 email-form">
              <div className="col-sm-10">
                <input
                  ref={mail_signin}
                  type="email"
                  name="mail"
                  className="form-control"
                  id="mail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3 password-form">
              <div className="col-sm-10">
                <input
                  ref={password_signin}
                  type="password"
                  name="password"
                  className="form-control input-email"
                  id="password"
                  placeholder="Password"
                  autoComplete="on"
                />
              </div>
            </div>
            <input
              type="button"
              value="Sign Up"
              className="btn btn-primary btn-form btn-signin"
              onClick={handlerSignIn}
            />
            <hr className="hr" />
            <div className="d-grid gap-3 col-9 my-5 mx-4 container-gf">
              <button className="btn btn-primary rounded-pill continue-g" type="button"><img src="img/2000px-Google_G_Logo.svg_.png" className="boton-google"  alt="btn google" />Continue with google </button>
              <button className="btn btn-primary rounded-pill continue-f" type="button"><img src="img/facebook-white.png" className="boton-fb" alt="btn-fb" />Continue with facebook </button>
            </div>
          </form>
        </aside>
      
      </main>
    </div>
  );
}
