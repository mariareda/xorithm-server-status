import { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Container maxWidth="xs" className="mt-10 p-5 border rounded-lg shadow">
      <Typography variant="h5" className="text-center mb-4 font-bold">
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          className="mt-4"
        >
          Login
        </Button>
        <Button
          variant="text"
          fullWidth
          className="mt-2"
          onClick={() => router.push("/signup")}
        >
          Create an account
        </Button>
      </form>
    </Container>
  );
}