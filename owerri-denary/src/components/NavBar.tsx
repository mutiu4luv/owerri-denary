import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/cyon-logo.jpeg";

const navItems = ["Home", "About", "Features", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const brandGreen = "#0B6E4F";
  const sharpYellow = "#FFD700";

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: "flex" }}>
            <img src={logo} alt="Logo" style={{ height: 45 }} />
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                disableRipple
                sx={{
                  color: brandGreen,
                  fontWeight: 600,
                  ml: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: sharpYellow,
                    color: "#000", 
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: brandGreen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Proper spacing below fixed navbar */}
      <Toolbar />

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "brandGreen",
          },
        }}
      >
        <Box sx={{ height: "100%" }}>
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: brandGreen }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Drawer Links */}
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: sharpYellow,
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: brandGreen,
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
