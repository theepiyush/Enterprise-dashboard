import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";

export function DashboardLayout() {
  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <Header />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flex={1} p={{ xs: 2, md: 4 }} minWidth={0}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}