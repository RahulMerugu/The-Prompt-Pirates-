import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../UI-components/Card";
import { Input } from "../UI-components/Input";
import { Button } from "../UI-components/Button";
import axios from "axios";
import "../UI-components/UI.css"; // Assuming your CSS is here

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/home");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-title">XChango</h1>
      <Card className="login-card">
        <CardContent className="login-card-content">
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-small" style={{ color: "red" }}>{error}</p>}
            <Button type="submit">Login</Button>
          </form>
          <p className="text-small text-center">
            Don’t have an account?{" "}
            <span className="link-text" onClick={() => navigate("/register")}>
              Register
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
