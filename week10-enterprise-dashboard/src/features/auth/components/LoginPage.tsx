import { useState } from "react";
import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app/hooks";
import { signIn } from "@/features/auth/slices/authSlice";

export function LoginPage() {
  const [email, setEmail] = useState("analyst@example.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 4) {
      setError("Enter a valid email and a password with at least 4 characters.");
      return;
    }
    dispatch(signIn({ id: "demo-1", name: "Alex Morgan", email, role: "analyst" }));
    navigate("/dashboard");
  };

  return (
    <Box minHeight="100vh" display="grid" placeItems="center" bgcolor="#0f172a" p={2}>
      <Paper component="form" onSubmit={submit} sx={{ p: 4, width: "100%", maxWidth: 430, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={900} mb={1}>Welcome back</Typography>
        <Typography color="text.secondary" mb={3}>Sign in to the enterprise analytics workspace.</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
        <Button fullWidth size="large" type="submit" variant="contained" sx={{ mt: 2 }}>Sign in</Button>
      </Paper>
    </Box>
  );
}