import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const mail = useRef();
  const password = useRef();


  async function handlerContinue() {
    try {
      let data = {
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(apiUrl + "users/", data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <main className="main-form">
        <article>
          <h1 className="h1-form">My Tinerary</h1>
        </article>
        <aside className="father-form">
          <form className="container-form">
            <h6 className="step-form">step 1 of 2</h6>
            <h3 className="create-text">Create account</h3>
            <div className="icons-form">
              <a href="">
                <img
                  src="img/2000px-Google_G_Logo.svg_.png"
                  width={"45px"}
                  height={"45px"}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="img-face"
                  src="img/Facebook_f_logo_(2019).svg.png"
                  width={"45px"}
                  height={"45px"}
                  alt=""
                />
              </a>
            </div>
            <hr className="hr" />
            <div className="parraf-form">
              <p className="p-singup">Sing up with email</p>
              <p>
                Already have an account?{" "}
                <Anchor
                  className="singin-form"
                to={'/formtwo'}
                >
                  Sing in
                </Anchor>
              </p>
            </div>
            <div className="row mb-3 email-form">
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
            <div className="row mb-3 password-form">
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
            <button
              type="submit"
              className="btn btn-primary btn-form"
              onClick={handlerContinue}
            >
              Continue
            </button>
          </form>
        </aside>
      </main>
    </div>
  );
}
