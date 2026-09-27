import { Alert, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { StatCard } from "@/components/atoms/StatCard";
import { RevenueChart } from "@/features/dashboard/components/RevenueChart";
import { useAppSelector } from "@/app/hooks";
import { useWebSocket } from "@/hooks/useWebSocket";

export function DashboardPage() {
  const { stats, chartData, lastUpdated } = useAppSelector((s) => s.dashboard);
  const { reconnect } = useWebSocket();

  return (
    <Stack spacing={3}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2} flexWrap="wrap">
        <Box>
          <Typography variant="h4" fontWeight={900}>Dashboard overview</Typography>
          <Typography color="text.secondary">Monitor business health and live activity.</Typography>
        </Box>
        <Chip label={lastUpdated ? "Live updates active" : "Connected to demo stream"} color="success" onClick={reconnect} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}><StatCard label="Revenue" value={`$${stats.revenue.toLocaleString()}`} delta="+12.4%" /></Grid>
        <Grid item xs={12} sm={6} lg={3}><StatCard label="Orders" value={stats.orders.toLocaleString()} delta="+8.2%" /></Grid>
        <Grid item xs={12} sm={6} lg={3}><StatCard label="Active users" value={stats.activeUsers.toLocaleString()} delta="+15.8%" /></Grid>
        <Grid item xs={12} sm={6} lg={3}><StatCard label="Conversion rate" value={`${stats.conversionRate}%`} delta="+0.6%" /></Grid>
      </Grid>
      <RevenueChart data={chartData} />
      <Alert severity="info">
        Real-time updates are simulated locally for this standalone training project. Replace the WebSocket service with your authenticated backend endpoint in production.
      </Alert>
    </Stack>
  );
}