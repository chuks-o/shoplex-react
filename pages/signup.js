import { Component } from "react";
import fetch from "isomorphic-unfetch";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { baseUrl } from "../utils/variables";
import Link from "next/link";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {},
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      terms: "",
      password: "",
      password_confirmation: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      let form = {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        password: this.state.password,
        password_confirmation: this.state.password,
      };

      const response = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const user = await response.json();

      if (user.code === 201) {
        this.setState({
          phone: "",
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          password_confirmation: "",
        });
        alert("User has been created successfully");
      }
    } catch (error) {}
    this.setState({ isLoading: false });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <DefaultLayout>
        <div className="signup-body">
          <div className="container">
            <div className="row signup-form ">
              <div className="col-lg-6 col-md-8 my-5 mx-auto">
                <div className="text-center my-2">
                  <span>
                    Already have an account? &nbsp;
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </span>
                </div>
                <div className="card shadow-sm border-0">
                  <div className="card-body p-0">
                    <div className="p-lg-5 p-4">
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <h3 className="text-center m-0 p-0 font-weight-bold">
                          Create an account
                        </h3>
                      </div>

                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email" className="mb-1">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6 pr-lg-1">
                            <div className="form-group">
                              <label htmlFor="firstname" className="mb-1">
                                Firstname
                              </label>
                              <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                className="form-control"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 pl-lg-1">
                            <div className="form-group">
                              <label htmlFor="lastname" className="mb-1">
                                Lastname
                              </label>
                              <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                className="form-control"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="phoneNumber" className="mb-1">
                            Phone Number
                          </label>
                          <input
                            id="phoneNumber"
                            type="number"
                            name="phone"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            required
                          />
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="password" className="mb-1">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                          />
                          <input
                            id="password_confirmation"
                            type="hidden"
                            name="password_confirmation"
                            className="form-control"
                            value={this.state.password}
                            required
                          />
                        </div>

                        <div className="custom-control custom-checkbox mb-4">
                          <input
                            id="customCheck"
                            type="checkbox"
                            name="terms"
                            value={this.state.terms}
                            onChange={this.handleChange}
                            className="custom-control-input"
                            required
                          />
                          <label
                            htmlFor="customCheck"
                            className="custom-control-label pl-2"
                          >
                            I agree with the
                            <a className="font-weight-bold"> Terms </a>
                            and
                            <a className="font-weight-bold"> Privacy Policy</a>
                          </label>
                        </div>

                        <div className="form-group mt-4">
                          <button
                            className="btn btn-primary font-weight-bold"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading ? "Please Wait..." : "Register"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .signup-form {
              min-height: 100vh;
              display: flex;
              justify-content: center;
              margin-top: 76px;
            }
            .signup-body {
              background-color: #f8f8f9;
            }
          `}</style>
        </div>
      </DefaultLayout>
    );
  }
}

export default Signup;
