import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate()
  const name = useRef();
  const lastName = useRef();
  const mail = useRef();
  const password = useRef();
  const photo = useRef();
  const country = useRef();
  async function handlerSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        mail: mail.current.value,
        password: password.current.value,
        photo: photo.current.value,
        country: country.current.value,
      };
      await axios.post(
        apiUrl + 'auth/register',
        data
    )
     if (data ) {
      Swal.fire({
        icon: 'success',
        title: 'User successfully registered',
        showConfirmButton: false,
        timer: 1500
      }
      )
      navigate("/signin")
     }
    } catch (error) {
      if (error) {
        let faild = error.response.data.messages 
        console.log(error)
        Swal.fire({
          title: 'User registration failed!',
          icon: 'error',
          html: faild.map(each =>`<p>${each}</p>`).join('')
          //html: faild.join('<br>')
        })
      }
    }
    
  }

  return (

    <div className="father-singup">

      <main className="main-form">
        <article>
          <h1 className="h1-form">My Tinerary</h1>
        </article>

        <aside className="father-form-signup">
          <form className="container-form-signup">
            <h6 className="step-form"></h6>
            <h3 className="create-text">Create account</h3>
            <div className="icons-form">
              <a href="">
                <img
                  src="img/2000px-Google_G_Logo.svg_.png"
                  width={"35px"}
                  height={"35px"}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="img-face"
                  src="img/Facebook_f_logo_(2019).svg.png"
                  width={"35px"}
                  height={"35px"}
                  alt=""
                />
              </a>
            </div>
            <hr className="hr" />
            <div className="parraf-form">
              <p className="p-singup">Sing up with email</p>
              <p>
                Already have an account?{" "}
                <Anchor className="singin-form" to={"/signin"}>
                  Sing in
                </Anchor>
              </p>
            </div>
            <div className="container-names">
              <div className="row mb-3 first-name">
                <div className="col-sm-10">
                  <input
                    ref={name}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="row mb-3 last-name">
                <div className="col-sm-10">
                  <input
                    ref={lastName}
                    type="text"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 email-form-signup">
              <div className="col-sm-10">
                <input
                  ref={mail}
                  type="email"
                  name="mail"
                  className="form-control"
                  id="mail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3 password-form-sigup">
              <div className="col-sm-10">
                <input
                  ref={password}
                  type="password"
                  name="password"
                  className="form-control input-email"
                  id="password"
                  placeholder="Password"
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="row mb-3 photo-form">
              <div className="col-sm-10">
                <input
                  ref={photo}
                  type="text"
                  name="photo"
                  className="form-control input-photo-signup"
                  id="photo"
                  placeholder="Photo"
                />
              </div>
            </div>
            <div className="country">
              <label className="form-label">Country / Region</label>
              <select
                ref={country}
                id="country"
                className="form-select country-select"
              >
                <option value=""></option>
                <option value="Argentina">Argentina</option>
                <option value="Brazil">Brazil</option>
                <option value="Uruguay">Uruguay</option>
                <option value="USA">USA</option>
                <option value="Italy">Italy</option>
                <option value="Norway">Norway</option>
                <option value="Spain">Spain</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div className="row mb-3 contact-mail">
              <div className="col-sm-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label">
                    Please contact me via email
                  </label>
                </div>
              </div>
            </div>
            <p className="p-policy">
              By clicking Create account, I agree that I have read and accepted
              the <a href=""> Terms of Use</a> and <a href="">Privacy Policy</a>.
            </p>

            <input
              type="button"
              value="Sign Up"
              className="btn btn-primary btn-form btn-signup"
              onClick={handlerSignUp}
            />

          </form>
        </aside>
      </main>
    </div>

  );

}
