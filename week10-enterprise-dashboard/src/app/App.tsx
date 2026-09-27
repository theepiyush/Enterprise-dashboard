import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { useAppSelector } from "@/app/hooks";
import { DashboardLayout } from "@/components/templates/DashboardLayout";

const LoginPage = lazy(() => import("@/features/auth/components/LoginPage").then(m => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import("@/pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const AnalyticsPage = lazy(() => import("@/pages/AnalyticsPage").then(m => ({ default: m.AnalyticsPage })));
const ReportsPage = lazy(() => import("@/pages/ReportsPage").then(m => ({ default: m.ReportsPage })));
const SettingsPage = lazy(() => import("@/pages/SettingsPage").then(m => ({ default: m.SettingsPage })));

function Protected() {
  const authenticated = useAppSelector((s) => Boolean(s.auth.token));
  return authenticated ? <DashboardLayout /> : <Navigate to="/auth/login" replace />;
}

export default function App() {
  return (
    <Suspense fallback={<Box minHeight="100vh" display="grid" placeItems="center"><CircularProgress /></Box>}>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
          <Route path="/dashboard/reports" element={<ReportsPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}