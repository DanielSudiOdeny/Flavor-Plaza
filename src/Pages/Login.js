import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username,
      password,
      email,
      phoneNumber,
      age,
      area,
    };

    try {
      const response = await fetch(" http://localhost:5000/Logins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (username && password && email && phoneNumber && age && area) {
        setIsLoggedIn(true);
        navigate("/welcome");
      } else {
        console.error("Login failed");
      }

      if (response.ok) {
        navigate("/welcome");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6 login-container shadow-lg">
          <h2 className="text-center login-text">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="area" className="form-label">
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
