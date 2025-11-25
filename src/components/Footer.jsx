import React from "react";
import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        mt: 3,
        py: 1.5,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 1.5, sm: 2 } }}>
        <Grid container spacing={2} alignItems="flex-start">
          {/* Newsletter */}
          <Grid item xs={12} md={5}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 0.25 }}>
              Get the newest DEMA news
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", opacity: 0.8, mb: 0.75 }}>
              Stay updated with events & announcements
            </Typography>
            <Box sx={{ display: "flex", gap: 0.75, alignItems: "center" }}>
              <TextField
                placeholder="Enter email"
                size="small"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    height: "36px",
                  },
                  "& input": {
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  height: "36px",
                  px: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: (theme) =>
                      `0 8px 20px ${theme.palette.secondary.main}80`,
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>

          {/* Logo */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  transition: "all 0.2s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: (theme) =>
                      `0 4px 12px ${theme.palette.secondary.main}4d`,
                  },
                }}
              >
                D
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom info */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 1.25,
            pt: 1,
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem", opacity: 0.75, mb: 0.1 }}>
            Privacy Policy | Terms of Use | Manage Cookies
          </Typography>
          <Typography sx={{ fontSize: "0.65rem", opacity: 0.65 }}>
            © {new Date().getFullYear()} Digital Enterprises Management
            Association
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
