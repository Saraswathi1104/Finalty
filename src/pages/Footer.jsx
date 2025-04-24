import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", p: 4, mt: 8 }}>
      <Grid container spacing={4} gap={"20%"} display="flex" >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Let’s keep in touch!
          </Typography>
          <Typography variant="body1" mb={3}>
            Find us on any of these platforms, we respond 1-2 business days.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{ backgroundColor: "#f5f5f5", "&:hover": { opacity: 0.8 } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "#f5f5f5", "&:hover": { opacity: 0.8 } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "#f5f5f5", "&:hover": { opacity: 0.8 } }}
            >
              <InstagramIcon sx={{ color: "#e1306c" }} />
            </IconButton>
          </Stack>
        </Grid>

        {/* Right Sections */}
        <Grid item xs={12} md={3} >
          <Typography fontWeight="bold" mb={1} >
            Useful Links
          </Typography>
          <Typography>About Us</Typography>
          <Typography>Services</Typography>
          <Typography>Key Peoples</Typography>
          <Typography>Contact Us</Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography fontWeight="bold" mb={1}>
            Other Resources
          </Typography>
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </Grid>
      </Grid>

      {/* Divider & Bottom Text */}
      <Divider sx={{ my: 4 }} />
      <Typography align="center" fontSize="14px" fontWeight="medium">
        <strong>Fi<span style={{ color: "red" }}>Na</span>LTY</strong> FinTech Private Limited
      </Typography>
    </Box>
  );
};

export default Footer;
