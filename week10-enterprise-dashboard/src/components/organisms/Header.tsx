import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { signOut } from "@/features/auth/slices/authSlice";
import { useNavigate } from "react-router-dom";

export function Header() {
  const user = useAppSelector((s) => s.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(signOut());
    navigate("/auth/login");
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight={800}>Enterprise Analytics</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ width: 34, height: 34 }}>{user?.name?.[0] ?? "U"}</Avatar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography variant="body2" fontWeight={700}>{user?.name}</Typography>
            <Typography variant="caption" color="text.secondary">{user?.role}</Typography>
          </Box>
          <Button onClick={logout} size="small">Sign out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}