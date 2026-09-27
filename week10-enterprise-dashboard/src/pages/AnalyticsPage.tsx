import { Card, CardContent, Grid, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useAppSelector } from "@/app/hooks";

export function AnalyticsPage() {
  const data = useAppSelector((s) => s.dashboard.chartData);
  return (
    <>
      <Typography variant="h4" fontWeight={900} mb={1}>Analytics</Typography>
      <Typography color="text.secondary" mb={3}>Explore weekly performance and user activity.</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800} mb={2}>Orders by day</Typography>
              <ResponsiveContainer width="100%" height={380}>
                <BarChart data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="date" /><YAxis /><Tooltip /><Bar dataKey="orders" fill="#7c3aed" radius={[6,6,0,0]} /></BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800} mb={2}>Performance notes</Typography>
              <Typography paragraph>• Route-level lazy loading is enabled by React Router.</Typography>
              <Typography paragraph>• Redux Toolkit handles client state and persistence.</Typography>
              <Typography paragraph>• React Query is configured for server-state caching.</Typography>
              <Typography paragraph>• Recharts renders interactive data visualizations.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}