import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  label: string;
  value: string;
  delta: string;
}

export function StatCard({ label, value, delta }: Props) {
  return (
    <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", height: "100%" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
        <Typography variant="h4" fontWeight={800} sx={{ my: 1 }}>{value}</Typography>
        <Typography variant="body2" color="success.main">{delta} vs previous period</Typography>
      </CardContent>
    </Card>
  );
}