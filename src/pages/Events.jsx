import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Chip,
  IconButton,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Events() {
  const theme = useTheme();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const upcomingEvents = [
    {
      title: "Networking Mixer",
      date: "Dec 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Downtown Tech Hub",
      description:
        "Connect with industry professionals, startup founders, and fellow DEMA members. A casual, interactive evening designed to build meaningful professional relationships and explore collaboration opportunities.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Networking",
    },
    {
      title: "Web3 & AI Workshop",
      date: "Dec 12, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      description:
        "Dive deep into the latest emerging technologies. Learn from industry practitioners about blockchain applications, AI integration, and practical use cases in digital enterprises.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Workshop",
    },
    {
      title: "Annual Conference 2025",
      date: "Dec 19, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center",
      description:
        "Our flagship event featuring keynote speakers from Fortune 500 companies, expert panel discussions on digital transformation, interactive workshops, and extensive networking opportunities.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Conference",
    },
  ];

  const previousEvents = [
    {
      title: "Fall Networking Mixer",
      date: "Nov 14, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Downtown Tech Hub",
      description:
        "Connected 200+ professionals and DEMA members in an engaging evening of conversations and partnerships.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Networking",
    },
    {
      title: "Digital Transformation Panel",
      date: "Nov 7, 2025",
      time: "3:00 PM - 4:30 PM",
      location: "Innovation Lab",
      description:
        "Industry experts shared insights on digital transformation strategies and real-world implementation.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Panel",
    },
    {
      title: "Startup Pitch Night",
      date: "Oct 30, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "Tech Hub",
      description:
        "Five student teams pitched their digital product ideas to investors and industry mentors.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Pitch",
    },
    {
      title: "Summer Design Workshop",
      date: "Aug 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Design Studio",
      description:
        "Hands-on workshop on UX/UI design principles with leading design practitioners.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Workshop",
    },
    {
      title: "Leadership Summit",
      date: "Jul 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Convention Center",
      description:
        "Full-day summit with keynote speakers on emerging digital trends and leadership development.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Summit",
    },
    {
      title: "Spring Mixer",
      date: "Apr 10, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Downtown Tech Hub",
      description:
        "Spring networking session with over 150 attendees and 30+ industry partners.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Networking",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(previousEvents.length / itemsPerPage) - 1;

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const displayedPreviousEvents = previousEvents.slice(
    carouselIndex * itemsPerPage,
    (carouselIndex + 1) * itemsPerPage
  );

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="lg" sx={{ py: 3, pt: 6, pb: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{
              display: "inline-block",
              color: "secondary.main",
              fontWeight: 700,
              mb: 1,
            }}
          >
            EVENTS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              color: "primary.main",
            }}
          >
            Upcoming Events
          </Typography>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "text.secondary",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Join us for engaging events designed to connect, inspire, and
            empower the DEMA community. From networking mixers to technical
            workshops and our flagship conference.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {upcomingEvents.map((event, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.3s ease",
                  backgroundColor: "background.paper",
                  border: (theme) =>
                    `1.5px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                  boxShadow: (theme) =>
                    `0 2px 8px ${alpha(theme.palette.primary.main, 0.04)}`,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    borderColor: "secondary.main",
                    boxShadow: (theme) =>
                      `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Event Image */}
                <Box
                  sx={{
                    height: 140,
                    backgroundImage: `url('${event.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) =>
                        `linear-gradient(135deg, ${alpha(
                          theme.palette.primary.main,
                          0.3
                        )} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
                    },
                  }}
                />

                {/* Event Content */}
                <Box
                  sx={{
                    p: 2.5,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Category Badge */}
                  <Box sx={{ mb: 1.5 }}>
                    <Chip
                      label={event.category}
                      size="small"
                      sx={{
                        bgcolor: (theme) =>
                          alpha(theme.palette.secondary.main, 0.15),
                        color: "secondary.main",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      fontSize: "1.1rem",
                      color: "primary.main",
                    }}
                  >
                    {event.title}
                  </Typography>

                  {/* Date & Time */}
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "secondary.main",
                      }}
                    >
                      📅 {event.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "secondary.main",
                      }}
                    >
                      🕐 {event.time}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "secondary.main",
                      }}
                    >
                      📍 {event.location}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "text.secondary",
                      flexGrow: 1,
                    }}
                  >
                    {event.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Previous Events Section */}
      <Container maxWidth="lg" sx={{ py: 3, pb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{
              display: "inline-block",
              color: "secondary.main",
              fontWeight: 700,
              mb: 1,
            }}
          >
            PAST EVENTS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1,
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              color: "primary.main",
            }}
          >
            Previous Events
          </Typography>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Explore our past events and see the impact we've made with our
            community.
          </Typography>
        </Box>

        {/* Carousel with Overlay Arrow Controls */}
        <Box sx={{ position: "relative" }}>
          <Grid container spacing={2.5}>
            {displayedPreviousEvents.map((event, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "100%",
                    transition: "all 0.3s ease",
                    backgroundColor: "background.paper",
                    border: (theme) =>
                      `1.5px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                    boxShadow: (theme) =>
                      `0 2px 8px ${alpha(theme.palette.primary.main, 0.04)}`,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      bgcolor: "secondary.main",
                      zIndex: 1,
                    },
                    "&:hover": {
                      borderColor: "secondary.main",
                      boxShadow: (theme) =>
                        `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* Event Image */}
                  <Box
                    sx={{
                      height: 140,
                      backgroundImage: `url('${event.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: (theme) =>
                          `linear-gradient(135deg, ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )} 0%, ${alpha(
                            theme.palette.primary.main,
                            0.1
                          )} 100%)`,
                      },
                    }}
                  />

                  {/* Event Content */}
                  <Box
                    sx={{
                      p: 2.5,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Category Badge */}
                    <Box sx={{ mb: 1.5 }}>
                      <Chip
                        label={event.category}
                        size="small"
                        sx={{
                          bgcolor: (theme) =>
                            alpha(theme.palette.secondary.main, 0.15),
                          color: "secondary.main",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: "1.1rem",
                        color: "primary.main",
                      }}
                    >
                      {event.title}
                    </Typography>

                    {/* Date & Time */}
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "secondary.main",
                        }}
                      >
                        📅 {event.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "secondary.main",
                        }}
                      >
                        🕐 {event.time}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "text.secondary",
                        flexGrow: 1,
                      }}
                    >
                      {event.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Left Arrow Control */}
          <IconButton
            onClick={handlePrevCarousel}
            sx={{
              position: "absolute",
              left: -80,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
              color: (theme) => alpha(theme.palette.primary.main, 0.4),
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.9),
                color: "white",
                transform: "translateY(-50%) scale(1.15)",
              },
              display: { xs: "none", md: "flex" },
              zIndex: 10,
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          {/* Right Arrow Control */}
          <IconButton
            onClick={handleNextCarousel}
            sx={{
              position: "absolute",
              right: -80,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
              color: (theme) => alpha(theme.palette.primary.main, 0.4),
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.9),
                color: "white",
                transform: "translateY(-50%) scale(1.15)",
              },
              display: { xs: "none", md: "flex" },
              zIndex: 10,
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
