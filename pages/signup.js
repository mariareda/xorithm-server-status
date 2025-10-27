import { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Account created successfully!");
    router.push("/login");
  };

  return (
    <Container maxWidth="xs" className="mt-10 p-5 border rounded-lg shadow">
      <Typography variant="h5" className="text-center mb-4 font-bold">
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
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
          Sign Up
        </Button>
        <Button
          variant="text"
          fullWidth
          className="mt-2"
          onClick={() => router.push("/login")}
        >
          Already have an account? Login
        </Button>
      </form>
    </Container>
  );
}
