import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";

export default function Layout({ children }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
  ];

  return (
    <>
      <Header links={links} />
      <Container maxWidth="lg" sx={{ mt: 1.5, mb: 2, px: { xs: 1.5, sm: 2 } }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
