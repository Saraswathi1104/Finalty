import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";
import image from "../assets/home.jpg"
 const Home = () => {

  const location = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        padding: { xs: "2rem", md: "4rem" },
        minHeight: "100vh",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Section */}
        <Box maxWidth="700px">
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Introducing <span style={{ fontWeight: 700 }}>Finalty FinTech Private Limited</span>
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            mb={2}
            sx={{ lineHeight: 1.2 }}
          >
            Welcome to{" "}
            <span style={{ fontWeight: "bold", letterSpacing: "1px" }}>
              Fi<span style={{ color: "red" }}>Na</span>LTY
            </span>{" "}
            - A Comprehensive Guide to Smart Tenant-Landlord Value Creation
          </Typography>

          <Typography variant="h6" mb={4}>
            Step into the world of <strong>FiNaLTY</strong>, your digital guide to intelligent
            solutions for both tenants and landlords. Navigate the future of seamless property
            management and wealth creation.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f33",
              borderRadius: "30px",
              paddingX: "24px",
              paddingY: "10px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { backgroundColor: "#d22" },
            }}
          >
            Know More
          </Button>
        </Box>

        {/* Right Section */}
        <Box>
          <img src={image} alt="illustration" style={{ maxWidth: "100%" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;