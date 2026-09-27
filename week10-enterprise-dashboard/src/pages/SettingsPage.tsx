import { Card, CardContent, Switch, Typography, FormControlLabel, Stack } from "@mui/material";

export function SettingsPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={900}>Settings</Typography>
      <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={800}>Workspace preferences</Typography>
          <FormControlLabel control={<Switch defaultChecked />} label="Real-time notifications" />
          <FormControlLabel control={<Switch defaultChecked />} label="Persist login session" />
          <FormControlLabel control={<Switch />} label="Compact dashboard layout" />
        </CardContent>
      </Card>
    </Stack>
  );
}