import { Box, List, ListItemButton, ListItemText, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";

const items = [
  { label: "Overview", to: "/dashboard" },
  { label: "Analytics", to: "/dashboard/analytics" },
  { label: "Reports", to: "/dashboard/reports" },
  { label: "Settings", to: "/dashboard/settings" }
];

export function Sidebar() {
  return (
    <Paper square elevation={0} sx={{ width: 230, minHeight: "calc(100vh - 65px)", borderRight: "1px solid", borderColor: "divider", display: { xs: "none", md: "block" } }}>
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              sx={{
                borderRadius: 2, mb: 0.5,
                "&.active": { bgcolor: "primary.main", color: "primary.contrastText" }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Paper>
  );
}