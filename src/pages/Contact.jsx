import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  IconButton,

} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formValues.firstName) formErrors.firstName = "First Name is required";
    if (!formValues.lastName) formErrors.lastName = "Last Name is required";
    if (!formValues.phone) formErrors.phone = "Phone is required";
    if (!formValues.email) formErrors.email = "Email is required";
    if (!formValues.message) formErrors.message = "Message is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      alert("Message sent successfully!");
      setFormValues({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Box px={{ xs: 2, md: 10 }} py={6}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
            pb: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "1px",
              backgroundColor: "black",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              height: "1px",
              backgroundColor: "black",
            },
          }}
        >
          Contact us
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
          We love to hear from you. Please fill out this form or shoot us an
          email.
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={4}
      >
        <Box flex={{ xs: "100%", md: "48%" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box>
                <IconButton disabled>
                  <EmailIcon color="primary" />
                </IconButton>
                <Typography variant="subtitle1" fontWeight="600">
                  Email
                </Typography>
                <Typography variant="body2" color="gray">
                  Our friendly team is here to help.
                </Typography>
                <Link href="mailto:headoffice@finalty.in" underline="hover">
                  headoffice@finalty.in
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <IconButton disabled>
                  <ChatIcon color="primary" />
                </IconButton>
                <Typography variant="subtitle1" fontWeight="600">
                  Live chat
                </Typography>
                <Typography variant="body2" color="gray">
                  Our friendly team is here to help.
                </Typography>
                <Link href="#" underline="hover">
                  Start new chat
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <IconButton disabled>
                  <LocationOnIcon color="primary" />
                </IconButton>
                <Typography variant="subtitle1" fontWeight="600">
                  Office
                </Typography>
                <Typography variant="body2" color="gray">
                  Come say hello at our office HQ.
                </Typography>
                <Link underline="hover">
                  73, Max Worth Nagar-III, Kolapakkam, <br />
                  Chennai 600128.
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <IconButton disabled>
                  <PhoneIcon color="primary" />
                </IconButton>
                <Typography variant="subtitle1" fontWeight="600">
                  Phone
                </Typography>
                <Typography variant="body2" color="gray">
                  Mon-Fri from 8am to 5pm.
                </Typography>
                <Link href="tel:+917550114224" underline="hover">
                  +91 7550114224
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box flex={{ md: "48%" }}>
          <Paper elevation={1} sx={{ p: 4, backgroundColor: "#fafbfd" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
            </Grid>
            <Grid />

            <Grid item xs={12} mb={"20px"} mt={"20px"}>
              <TextField
                label="Phone"
                fullWidth
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            <Grid item xs={12} mb={"20px"} mt={"20px"}>
              <TextField
                label="Email Address"
                fullWidth
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            

            <Grid item xs={12} mb={"20px"} mt={"20px"}>
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
                error={!!errors.message}
                helperText={errors.message}
              />
            </Grid>
            <Grid item xs={12} mb={"20px"} mt={"20px"}>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#007BFF", textTransform: "none" }}
                onClick={handleSubmit}>
                Send Message
              </Button>
            </Grid>
          </Paper>
        </Box>
      </Box>

      
    </Box>
  );
};

export default Contact;
