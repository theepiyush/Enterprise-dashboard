import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useAppSelector } from "@/app/hooks";

export function ReportsPage() {
  const stats = useAppSelector((s) => s.dashboard.stats);

  const download = () => {
    const csv = `metric,value\nrevenue,${stats.revenue}\norders,${stats.orders}\nactiveUsers,${stats.activeUsers}\nconversionRate,${stats.conversionRate}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "dashboard-report.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={900}>Reports</Typography>
      <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={800}>Current KPI snapshot</Typography>
          <Typography color="text.secondary" mb={2}>Export the current dashboard metrics as CSV.</Typography>
          <Button variant="contained" onClick={download}>Export CSV</Button>
        </CardContent>
      </Card>
    </Stack>
  );
}