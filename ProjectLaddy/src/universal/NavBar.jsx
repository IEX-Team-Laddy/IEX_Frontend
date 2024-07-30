import { Routes, Route, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Landing from "../landing/Landing";
import Auth from "../auth/Auth";
import AdminMatch from "../universal/AdminMatch"; // Ensure this path is correct
import logo from "../Assets/Asset1.png";
import { supabase } from "../supabase";

export default function NavBar() {
  const [dashboard, renderDashboard] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderDashboardOnSignIn = (session) => {
    renderDashboard(session === null);
  };

  const hideDashboard = () => {
    renderDashboard(false);
  };

  const showDashboard = () => {
    renderDashboard(true);
  };

  const menuItems = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/about-us" },
    { text: "Questionnaire", to: "https://forms.gle/PWsDFzBuRWWryAaA6", external: true },
    { text: "Contact Us", to: "mailto:projectladdy@gmail.com", external: true }
  ];

  const drawer = (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={item.external ? 'a' : NavLink} href={item.external ? item.to : undefined} to={item.external ? undefined : item.to} target={item.external ? '_blank' : undefined}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button component={NavLink} to="/auth">
          <Button variant="contained" color="primary" fullWidth>
            Get Started
          </Button>
        </ListItem>
        <ListItem button component={NavLink} to="/auth">
          <Button variant="contained" color="secondary" fullWidth>
            Log In
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      {dashboard ? null : (
        <AppBar position="static" style={{ backgroundColor: "#fffaf0", boxShadow: 'none' }}>
          <Toolbar style={{ padding: 0, justifyContent: 'space-between' }}>
            <img src={logo} alt="Logo" style={{ width: 220, height: 40 }} />
            {isMobile ? (
              <>
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                  {drawer}
                </Drawer>
              </>
            ) : (
              <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {menuItems.map((item, index) => (
                    <Button key={index} color="inherit" component={item.external ? 'a' : NavLink} href={item.external ? item.to : undefined} to={item.external ? undefined : item.to} target={item.external ? '_blank' : undefined} style={{ color: '#000000', marginRight: '40px' }}>
                      {item.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            {!isMobile && (
              <div>
                <Button variant="contained" style={{ backgroundColor: "#30203C", borderRadius: 20, padding: 9, fontWeight: "normal", marginRight: "30px" }}>
                  <NavLink to="/auth" style={{ color: "white" }}>
                    Get Started
                  </NavLink>
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#FFFAF0", borderRadius: 20, padding: 9, marginRight: "40px" }}>
                  <NavLink to="/auth" style={{ color: "black" }}>
                    Log In
                  </NavLink>
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/languages" element={<Landing />} />
        <Route exact path="/auth" element={<Auth showDashboard={showDashboard} hideDashboard={hideDashboard} />} />
        <Route exact path="/adminmatch" element={<AdminMatch />} />
      </Routes>
    </>
  );
}
