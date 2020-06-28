import { Component } from "react";
import fetch from "isomorphic-unfetch";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { login } from "../utils/Auth";
import { baseUrl } from "../utils/variables";
import { toast } from "react-toastify";
import { notify } from "../utils/RequestErrors";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      terms: "",
      isLoading: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const form = {
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({ isLoading: true });

    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const responseData = await response.json();

      if (responseData.code === 200) {
        const { data, token } = responseData;
        const user = data.user;
        login({ token, user });
      } else {
        notify(responseData);
      }
    } catch (error) {
      toast.error("Network error: Kindly check your internet");
    }

    this.setState({ isLoading: false });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <DefaultLayout>
        <div className="login--body">
          <div className="container">
            <div className="row login-form pt-5">
              <div className="col-lg-5 col-md-8 mx-auto">
                <div className="card shadow-sm border-radius-0 border-0 ">
                  <div className="card-body p-5">
                    <h5 className="text-center mb-4 font-weight-bold">Login</h5>
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
                      </div>

                      <div className="d-flex mb-2">
                        <div className="custom-control custom-checkbox mb-2">
                          <input
                            id="customCheck"
                            type="checkbox"
                            name="terms"
                            className="custom-control-input"
                            value={this.state.terms}
                            onChange={this.handleChange}
                          />
                          <label
                            htmlFor="customCheck"
                            className="custom-control-label"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <button
                          className="btn btn-primary font-weight-bold"
                          type="submit"
                          disabled={this.state.isLoading}
                        >
                          {this.state.isLoading ? "Please wait..." : "Login"}
                        </button>
                      </div>

                      <div className="ml-auto mb-3">
                        <a className="font-weight-normal" href="/">
                          Forgot Password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .login--body {
              min-height: 94vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .login--body {
              background-color: #f8f8f9;
            }
          `}</style>
        </div>
      </DefaultLayout>
    );
  }
}

export default Login;
