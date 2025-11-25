import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function About() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* HERO - bold, navy gradient, left content + right illustration */}
      <Box
        component="section"
        sx={{
          background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 65%)`,
          color: "#fff",
          py: { xs: 6, md: 10 },
          mb: 4,
          overflow: "visible",
          position: "relative",
          borderRadius: 4,
          margin: { xs: "20px 1.5rem", md: "30px 2rem" },
          boxShadow: (theme) =>
            `0 20px 60px ${alpha(
              theme.palette.primary.main,
              0.3
            )}, inset 0 1px 0 ${alpha("#fff", 0.1)}`,
          border: (theme) => `1px solid ${alpha("#fff", 0.15)}`,
          transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
          animation: "heroGlow 6s ease-in-out infinite",
          "@keyframes heroGlow": {
            "0%, 100%": {
              boxShadow: (theme) =>
                `0 20px 60px ${alpha(
                  theme.palette.primary.main,
                  0.3
                )}, inset 0 1px 0 ${alpha("#fff", 0.1)}`,
            },
            "50%": {
              boxShadow: (theme) =>
                `0 30px 80px ${alpha(
                  theme.palette.secondary.main,
                  0.25
                )}, inset 0 1px 0 ${alpha("#fff", 0.15)}`,
            },
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  display: "inline-block",
                  color: "secondary.main",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                ABOUT
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.05,
                  fontSize: { xs: "1.8rem", md: "2.6rem" },
                  mb: 2,
                }}
              >
                We prepare the next generation of digital leaders
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.05rem",
                  mb: 3,
                  maxWidth: 680,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Digital Enterprises Management Association (DEMA) bridges
                academic learning and the digital industry through hands-on
                projects, mentorship, and curated events. We help members turn
                ideas into real-world impact.
              </Typography>

              <Stack direction={{ s: "column", sm: "row" }} spacing={2}>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 1)",
                    mb: 1,
                  }}
                >
                  Follow us
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    component="a"
                    href="hhttps://www.linkedin.com/company/demassociation"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      bgcolor: (theme) =>
                        alpha(theme.palette.secondary.main, 0.2),
                      border: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,
                      width: 44,
                      height: 44,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "secondary.main",
                        transform: "translateY(-3px)",
                        boxShadow: (theme) =>
                          `0 8px 16px ${alpha(
                            theme.palette.secondary.main,
                            0.3
                          )}`,
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/demassociation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      bgcolor: (theme) =>
                        alpha(theme.palette.secondary.main, 0.2),
                      border: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,
                      width: 44,
                      height: 44,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "secondary.main",
                        transform: "translateY(-3px)",
                        boxShadow: (theme) =>
                          `0 8px 16px ${alpha(
                            theme.palette.secondary.main,
                            0.3
                          )}`,
                      },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>

            {/* Illustration: abstract shapes (CSS) — avoids external images */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: { xs: 220, md: 260 } }}>
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: -20, md: 0 },
                    top: { xs: -10, md: 10 },
                    width: { xs: 220, md: 340 },
                    height: { xs: 220, md: 340 },
                    borderRadius: "40% 60% 55% 45% / 45% 55% 45% 55%",
                    background: `radial-gradient(circle at 30% 20%, ${alpha(
                      theme.palette.secondary.main,
                      0.14
                    )}, transparent 30%), ${alpha("#fff", 0.06)}`,
                    border: `1px solid ${alpha("#fff", 0.06)}`,
                    boxShadow: `0 10px 40px ${alpha(
                      theme.palette.primary.main,
                      0.25
                    )}`,
                    transform: "rotate(-8deg)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: 20, md: 36 },
                    top: { xs: 18, md: 36 },
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
                    borderRadius: "999px",
                    background: "secondary.main",
                    opacity: 0.14,
                    filter: "blur(8px)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHAT WE DO - three strong feature cards */}
      <Container maxWidth="lg" sx={{ mb: 6, mt: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontWeight: 800,
              color: "primary.main",
              mb: 1.5,
              fontSize: { xs: "1.4rem", md: "1.7rem" },
            }}
          >
            What We Do
          </Typography>
          <Box
            sx={{
              height: 3,
              width: 50,
              bgcolor: "secondary.main",
              borderRadius: 1,
            }}
          />
        </Box>
        <Grid container spacing={2.5}>
          {[
            {
              title: "Hands-on Projects",
              text: "Real teams, product development, and mentorship from industry partners.",
              icon: "🚀",
            },
            {
              title: "Workshops & Talks",
              text: "Curated learning paths with practitioners from design, tech, and strategy.",
              icon: "📚",
            },
            {
              title: "Career Support",
              text: "Networking, internships, and interview prep tailored to digital enterprise roles.",
              icon: "🎯",
            },
          ].map((f, i) => (
            <Grid item xs={12} md={4} key={f.title}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  bgcolor: "background.paper",
                  border: (theme) =>
                    `1.5px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  boxShadow: (theme) =>
                    `0 4px 12px ${alpha(theme.palette.primary.main, 0.08)}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                    boxShadow: (theme) =>
                      `0 8px 24px ${alpha(theme.palette.secondary.main, 0.15)}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "2.5rem",
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {f.icon}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    fontSize: "1.1rem",
                  }}
                >
                  {f.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {f.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Vision - bold, side-by-side cards */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                borderRadius: 2,
                height: "100%",
                background: (theme) =>
                  `linear-gradient(135deg, ${alpha(
                    theme.palette.secondary.main,
                    0.08
                  )} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
                border: (theme) =>
                  `2px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                boxShadow: (theme) =>
                  `0 8px 24px ${alpha(theme.palette.secondary.main, 0.1)}`,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    fontSize: "2.5rem",
                    width: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🎯
                </Box>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                  }}
                >
                  Mission
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "text.primary",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Empower students with practical knowledge, industry connections,
                and hands-on experience in digital transformation and enterprise
                management.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                borderRadius: 2,
                height: "100%",
                background: (theme) =>
                  `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.08
                  )} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
                border: (theme) =>
                  `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                boxShadow: (theme) =>
                  `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    fontSize: "2.5rem",
                    width: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✨
                </Box>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                  }}
                >
                  Vision
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "text.primary",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Build a vibrant community of forward-thinking leaders who drive
                innovation and create meaningful impact in their organizations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Accolades - strong highlight section */}
      <Box sx={{ bgcolor: "background.paper", py: 6, mb: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 800,
                color: "primary.main",
                fontSize: { xs: "1.4rem", md: "1.7rem" },
                mb: 1.5,
              }}
            >
              Our Impact
            </Typography>
            <Box
              sx={{
                height: 3,
                width: 50,
                bgcolor: "secondary.main",
                borderRadius: 1,
                mx: "auto",
              }}
            />
          </Box>
          <Grid container spacing={2.5} justifyContent="center">
            {[
              { stat: "12", label: "Student Products Launched" },
              { stat: "20+", label: "Industry Mentors" },
              { stat: "40+", label: "Workshops Hosted" },
              { stat: "1000+", label: "Hours of Learning" },
            ].map((item, i) => (
              <Grid key={item.label} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: "background.default",
                    border: (theme) =>
                      `1.5px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "secondary.main",
                      boxShadow: (theme) =>
                        `0 8px 20px ${alpha(
                          theme.palette.secondary.main,
                          0.12
                        )}`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2.2rem",
                      fontWeight: 900,
                      color: "secondary.main",
                      mb: 0.5,
                    }}
                  >
                    {item.stat}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "text.secondary",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
