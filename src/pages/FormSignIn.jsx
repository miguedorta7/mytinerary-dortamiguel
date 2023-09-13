import { Link as Anchor } from "react-router-dom"

export default function FormSignIn() {
    return (



      <div>
        <main className="main-form">
          <article>
            <h1 className="h1-form">My Tinerary</h1>
          </article>
          <aside className="father-form">
            <form className="container-form">
              <h6 className="step-form">step 2 of 2</h6>
              <h3 className="create-text">Create account</h3>
  
              <hr className="hr" />
              <div className="parraf-form">
                <p className="p-singup">Sing up with email</p>
                <p>
                  Already have an account?{" "}
                  <Anchor className="singin-form" to={'/form'}>Sing in</Anchor>
                </p>
              </div>
              <div className="container-names">
                <div className="row mb-3 first-name">
                  <div className="col-sm-10">
                    <input
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
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
  
              <h6 className="title-date">Date of birth</h6>
  
              <div className="row mb-3 date-birth">
                <div className="col-sm-10">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    id="date"
                    placeholder="date"
                  />
                </div>
              </div>
              <div className="row mb-3 photo-form">
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="photo"
                    className="form-control input-email"
                    id="photo"
                    placeholder="Photo"
                  />
                </div>
              </div>
              <div className="country">
                <label className="form-label">Country / Region</label>
                <select id="inputState" className="form-select country-select">
                  <option value>Argentina</option>
                  <option value>Brazil</option>
                  <option value>Uruguay</option>
                </select>
              </div>
              <div className="row mb-3 contact-mail">
                <div className="col-sm-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label">
                      Please contact me via email
                    </label>
                  </div>
                </div>
              </div>
              <p className="p-policy">By clicking Create account, I agree that I have read and accepted the <a href=""> Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
              <button type="submit" className="btn btn-primary btn-form">
                Continue
              </button>
            </form>
          </aside>
        </main>
      </div>
    )
  }
  