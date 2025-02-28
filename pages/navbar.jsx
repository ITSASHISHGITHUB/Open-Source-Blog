import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#EAF2FF", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
        
        {/* Scroll Progress Bar inside the AppBar */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            backgroundColor: "#ddd",
          }}
        >
          <Box
            sx={{
              height: "100%",
              backgroundColor: "#00008B",
              transition: "width 0.2s ease-in-out",
              width: `${scrollPercentage}%`,
            }}
          />
        </Box>

        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Left Side - Logo / Title */}
          <a href="/" style={{ textDecoration: "none", color: "#00008B" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Open Source Contribution – Fork, Build, and Enhance the Blog
            </Typography>
          </a>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" sx={{ color: "#00008B", mr: 2 }}>Home</Button>
            <Button color="inherit" sx={{ color: "#00008B", mr: 2 }}>Docs</Button>
            <Button color="inherit" sx={{ color: "#00008B", mr: 2 }}>Community</Button>
            <IconButton
              color="inherit"
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <GitHubIcon sx={{ color: "#00008B" }} />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#00008B" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {["Home", "Docs", "Community"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button component="a"  href="https://github.com/ITSASHISHGITHUB/Open-Source-Blog" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="GitHub" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
