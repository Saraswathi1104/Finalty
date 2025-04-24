import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material"; // <-- Added Grid here
import SendIcon from "@mui/icons-material/Send";
import image from "../assets/NRI.png"; // Replace with your image path

const ServicesSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        padding: { xs: "2rem", md: "4rem" },
        minHeight: "100vh",
      }}
      
    >
           <Typography variant="h4" fontWeight="bold" mb={2} sx={{textAlign:"center", textDecoration: "underline" }}>
            Our Services
          </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Section - Text Content */}
        <Box maxWidth="1100px">
       

          <Typography variant="h5" fontWeight="bold" mb={1}>
            Serve for NRI Landlords
          </Typography>

          <Typography variant="h6">
            Our specialized property management guarantees a smooth process in overseeing your real estate assets.
            Reap the full spectrum of advantages associated with investing in Indian land without the stress.
            Managing property from abroad becomes effortless with our digital solutions.
          </Typography>

          <Typography variant="h6" mb={3}>
            When contemplating an investment, factor in maintenance costs and experience a seamless journey
            overseeing your real estate assets with our specialized property management services.
          </Typography>

          {/* Services Bullet Points */}
          <Grid container spacing={2}>
            {[
              "Comprehensive NRI-Focused Solutions",
              "Worry-Free Benefits",
              "Mindful Maintenance Planning",
              "Seamless Oversight with Expert Management",
            ].map((text, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Stack direction="row" alignItems="center">
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography fontWeight="bold">{text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Right Section - Image */}
        <Box>
          <img src={image} alt="NRI Services" style={{ width: 600 }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ServicesSection;
