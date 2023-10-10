import React from "react";
import GuestHeader from "./HeaderGuest";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { Container, Paper } from "@mui/material";

const LayoutGuest = () => {
  return (
    <>
      <GuestHeader />
      <Container sx={{ maxWidth: 800, marginTop: 3 }}>
        <Paper sx={{ minHeight: 300, padding: 3 }}>
          <Outlet />
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutGuest;