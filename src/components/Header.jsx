import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function Header({ links = [] }) {
  const location = useLocation();
  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        bgcolor: "primary.main",
        py: 1,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 2 } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: "auto",
            gap: 2,
          }}
        >
          {/* Left group: logo + nav (keeps nav close to logo) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
            }}
          >
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
                transition: "all 0.25s ease",
                color: "inherit",
                "&:hover": { transform: "translateY(-1px)" },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  width: 42,
                  height: 42,
                  fontWeight: 900,
                  fontSize: "1.15rem",
                  boxShadow: (theme) =>
                    `0 2px 8px ${theme.palette.secondary.main}40`,
                }}
              >
                D
              </Avatar>
              <Box sx={{ lineHeight: 1 }}>
                <Typography
                  sx={{ fontSize: "1.15rem", fontWeight: 800, color: "white" }}
                >
                  DEMA
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 600,
                  }}
                >
                  Digital Enterprises Management Association
                </Typography>
              </Box>
            </Box>

            {/* Nav Links - directly to the right of logo */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                ml: 1.5,
                alignItems: "center",
              }}
            >
              {links.map((l) => {
                const isActive = location.pathname === l.href;
                return (
                  <Button
                    key={l.label}
                    component={RouterLink}
                    to={l.href}
                    disableRipple
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1rem",
                      textTransform: "none",
                      px: 0,
                      py: 0.5,
                      transition: "color 0.18s ease",
                      position: "relative",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "transparent",
                      },
                      // underline effect
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -6,
                        height: 3,
                        width: isActive ? "100%" : "0%",
                        bgcolor: "secondary.main",
                        borderRadius: 2,
                        transition: "width 220ms cubic-bezier(.2,.9,.2,1)",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {l.label}
                  </Button>
                );
              })}
            </Box>
          </Box>

          {/* spacer to push any right-side items (if added later) to the far right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileMenuOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "primary.main",
            color: "white",
            width: 250,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
            Menu
          </Typography>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
          {links.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Button
                key={l.label}
                component={RouterLink}
                to={l.href}
                onClick={() => setMobileMenuOpen(false)}
                fullWidth
                sx={{
                  textAlign: "left",
                  justifyContent: "flex-start",
                  color: isActive ? "secondary.main" : "white",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  p: 1.5,
                  borderRadius: 1,
                  bgcolor: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.15)",
                    color: "secondary.main",
                  },
                }}
              >
                {l.label}
              </Button>
            );
          })}
        </Box>
      </Drawer>
    </AppBar>
  );
}
