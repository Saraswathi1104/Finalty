import React from "react";
import { Box, Typography, Grid, CardMedia } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import img1 from "../assets/aboutimg1.jpg";
import img2 from "../assets/aboutimg2.jpg";
import img3 from "../assets/aboutimg3.jpg";
import img4 from "../assets/aboutimg4.jpg";
import img5 from "../assets/aboutimg5.jpg";
import img6 from "../assets/aboutimg6.jpg";
// import img7 from "../assets/Demat_account-img.jpg";
import SendIcon from "@mui/icons-material/Telegram";

const damageFeatures = [
  "Prompt Response to Missed Payments",
  "Legal Action Assurance",
  "Formal Complaint Process",
  "Efficient Issue Resolution",
];

const About = () => {
  return (
    <>
    <Typography
  variant="h4"
  sx={{
    marginLeft: "40px",
    fontWeight: 500,
    position: "relative",
    display: "inline-block",
    mb: 4,
    ml : 85,
    mt : 5,  
    '&::after': {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -6,
      width: "100%",
      height: "1px",
      backgroundColor: "#000", // Change color if needed
      boxShadow: "0 4px 0 #000", // Second line
    },
  }}
>
  About
</Typography>

    <Box sx={{ px: { xs: 2, md: 6 }, py: 6, backgroundColor: "#fff" }}>
      <Grid sx={{ display: "flex", width: "100%" }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "60px",
            marginRight: "30px",
          }}
        >
          <Box
            component="img"
            src={img1}
            alt="Illustration"
            sx={{
              width: "100%",
              height: "50vh",

              display: "block",
            }}
          />
        </Grid>
        <Grid sx={{ width: "60%" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              // fontWeight: 500,
              textTransform: "uppercase",
              borderBottom: "3px solid #5da6c1",
              display: "inline-block",
              mx: "auto",
              mb: 2,
            }}
          >
            Seamless Communication
          </Typography>

          {/* Main Flex Grid with Image and Text */}
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              width: "660px",
            }}
            spacing={4}
          >
            <Grid>
              <Typography
                variant="h5"
                sx={{ mb: 2, fontSize: "30.4px", fontFamily: "sans-serif" }}
              >
                Revolutionizing Tenant-Landlord Interactions
              </Typography>

              <Typography sx={{ color: "#333", mb: 3 }}>
                Unlock a groundbreaking feature within our app designed to
                foster direct and transparent communication between tenants and
                landlords. Imagine a seamless process where tenants and
                landlords can connect instantly, facilitating clear transactions
                and streamlining the search for the perfect match.
              </Typography>

              {/* Feature Highlights */}
              <Grid container spacing={10}>
                <Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <SendIcon sx={{ color: "orangered", mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Seamless Connection
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <SendIcon sx={{ color: "orangered", mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Initiate Communication
                    </Typography>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <SendIcon sx={{ color: "orangered", mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Transparent Transactions
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <SendIcon sx={{ color: "orangered", mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Efficient Matchmaking
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer Paragraph */}
          <Typography
            sx={{
              maxWidth: "900px",
              mx: "auto",
              // textAlign: "center",
              color: "#444",
              mt: 3,
            }}
          >
            But that's not all – our innovative platform goes beyond the basics.
            Picture a world where the tenant-landlord relationship is enriched
            through advanced features, such as personalized recommendations,
            real-time property insights, and a secure platform ensuring your
            peace of mind throughout the entire process.
          </Typography>
          <Typography
            sx={{
              maxWidth: "900px",
              mx: "auto",
              // textAlign: "center",
              color: "#444",
              mt: 2,
            }}
          >
            Experience the future of property renting with us – where
            convenience meets sophistication, and your dream living space is
            just a click away.
          </Typography>
        </Grid>
      </Grid>

      {/* 2 section */}

      <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: "#fff" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            textTransform: "uppercase",
            borderBottom: "3px solid #5da6c1",
            display: "inline-block",
            color: "#333",
            mb: 3,
          }}
        >
          Hassle-Free Payment Process
        </Typography>

        {/* Main Grid Container */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Right Grid - Text */}
          <Grid item xs={12} md={6} sx={{ width: "70%" }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Auto Rent On-Time
            </Typography>
            <Typography sx={{ mb: 4, color: "#333", lineHeight: 1.8 }}>
              Bid farewell to the hassle of remembering rent deadlines. Our app
              ensures a seamless payment process by automatically transferring
              the rent amount to the landlord each month. Receive timely
              notifications to remind you about the upcoming rent payment,
              making the entire process stress-free.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Payment Reminders with a Personal Touch
            </Typography>
            <Typography sx={{ mb: 4, color: "#333", lineHeight: 1.8 }}>
              Our app doesn't just remind you to pay rent; it delivers a
              personalized message at the end of the month, gently reminding you
              to keep the necessary funds in your account. "You have to pay the
              rent, so keep the rent amount in your account balance" – ensuring
              a stress-free payment experience.
            </Typography>

            {/* Features with icons */}
            <Grid container spacing={10}>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Automatic Rent Payments
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Seamless Process Assurance
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Personalized Payment Reminders
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Financial Responsibility Encouragement
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ width: "30%" }}>
            <Box
              component="img"
              src={img2}
              alt="Payment Process Illustration"
              sx={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* 3 section */}
      <Grid sx={{ display: "flex", width: "100%" }}>
        <Grid sx={{ width: "50%" }}>
          <CardMedia
            component="img"
            image={img3}
            alt="img4"
            sx={{
              width: "100%",
              maxWidth: "500px",
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>
        <Grid sx={{ width: "50%" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              // fontWeight: 500,
              textTransform: "uppercase",
              borderBottom: "3px solid #5da6c1",
              display: "inline-block",
              mx: "auto",
              mb: 2,
            }}
          >
            Intervention and Penalties
          </Typography>
          <Grid>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontSize: "30.4px", fontFamily: "sans-serif" }}
            >
              Safety Net for Owners
            </Typography>

            <Typography sx={{ color: "#333", mb: 3 }}>
              In a commitment to our user's financial well-being, Finalty
              provides liquidity payments. Imagine a world where missed or
              delayed rent payments does not lead to stress and uncertainty.
            </Typography>

            {/* Feature Highlights */}
            <Grid container spacing={10}>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Prompt Response to Missed Payments
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Financial Safety Net
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Nominal Fee for Accountability
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Community Financial Health
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer Paragraph */}
          <Typography
            sx={{
              maxWidth: "900px",
              mx: "auto",
              // textAlign: "center",
              color: "#444",
              mt: 3,
            }}
          >
            Picture a community where financial well-being is elevated, and
            missed payments are transformed into opportunities for growth. Join
            us in reshaping the landscape of responsible living!
          </Typography>
        </Grid>
      </Grid>

      {/* 4 section */}

      <Box sx={{ px: { xs: 2, md: 10 }, backgroundColor: "#fff" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#2c3e50",
            fontWeight: 600,
            textTransform: "uppercase",
            borderBottom: "3px solid #5da6c1",
            display: "inline-block",
          }}
        >
          Damage Reporting
        </Typography>

        {/* Main Grid Container */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Right Grid - Text */}
          <Grid item xs={12} md={6} sx={{ width: "70%" }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Fortifying Property Interests with Vigilance
            </Typography>
            <Typography sx={{ mb: 4, color: "#333", lineHeight: 1.8 }}>
              Our commitment to safeguarding property interests goes beyond
              conventional property management. In the unfortunate event of
              tenant-caused damage, Finalty stands as your vigilant guardian.
              Landlords can seamlessly request our intervention, unleashing a
              powerful shield against property threats.
            </Typography>

            {/* Features with icons */}
            <Grid container spacing={10}>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Prompt Response to Missed Payments
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Financial Safety Net
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Nominal Fee for Accountability
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Community Financial Health
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ width: "30%" }}>
            <Box
              component="img"
              src={img4}
              alt="Payment Process Illustration"
              sx={{
                width: "800px",
                height: "500px",
                maxWidth: "500px",
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* 5 section */}
      <Grid sx={{ display: "flex", width: "100%" }}>
        <Grid sx={{ width: "50%" }}>
          <CardMedia
            component="img"
            image={img5}
            alt="
Financial History Transparency"
            sx={{
              width: "800px",
              height: "500px",
              maxWidth: "500px",
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>
        <Grid sx={{ width: "50%" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              borderBottom: "3px solid #5da6c1",
              display: "inline-block",
              mx: "auto",
              mb: 2,
            }}
          >
            Financial History Transparency
          </Typography>
          <Grid>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontSize: "30.4px", fontFamily: "sans-serif" }}
            >
              Elevate Your Property Management Experience
            </Typography>

            <Typography variant="h6">
              Welcome to a new era of property management, where financial
              accountability meets technological innovation. Our app empowers
              landlords with an unparalleled level of transparency into a
              tenant's financial history, going beyond the conventional rental
              experience.
            </Typography>
            <Typography variant="h6">
              Imagine having real-time access to comprehensive records,
              including water tax, current bills, and detailed payment history.
              This groundbreaking feature enables landlords to make informed
              decisions, ensuring the selection of trustworthy and responsible
              tenants who align with your property's values.
            </Typography>

            {/* Feature Highlights */}
            <Grid container spacing={10}>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "10px",
                  }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Transparent Financial Records
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Empowering Informed Decisions
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Comprehensive Payment Records
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Secure your Wealth
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer Paragraph */}
          <Typography
            sx={{
              maxWidth: "900px",
              mx: "auto",
              mt: 3,
            }}
          >
            Join us in revolutionizing property management – where transparency
            meets efficiency, and informed decisions lead to unparalleled
            tenant-landlord relationships. Elevate your property management
            experience with our cutting-edge platform today!
          </Typography>
        </Grid>
      </Grid>

      {/* 5th section */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: "#fff" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            textTransform: "uppercase",
            borderBottom: "3px solid #5da6c1",
            display: "inline-block",
            color: "#333",
            mb: 3,
          }}
        >
          Tenant Behaviour Profile
        </Typography>

        {/* Main Grid Container */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Right Grid - Text */}
          <Grid item xs={12} md={6} sx={{ width: "70%" }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Empowering Informed Decision-Making
            </Typography>
            <Typography sx={{ mb: 4, color: "#333", lineHeight: 1.8 }}>
              Unlock the power of comprehensive tenant insights with our Tenant
              Behaviour . It goes beyond the conventional approach, delving into
              tenant behavior, rent payment history, and current bill payment
              records. This detailed profile within the app enables informed
              decision-making for both tenants and landlords.
            </Typography>

            {/* Features with icons */}
            <Grid container spacing={10}>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Automatic Rent Payments
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Seamless Process Assurance
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Personalized Payment Reminders
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SendIcon sx={{ color: "orangered", mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Financial Responsibility Encouragement
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ width: "30%" }}>
            <Box
              component="img"
              src={img6}
              alt="Payment Process Illustration"
              sx={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* 6th section */}
      <Grid sx={{ display: "flex", width: "100%" }}>
        <Grid sx={{ width: "50%" }}>
          <CardMedia
            component="img"
            image={img1}
            alt="img4"
            sx={{
              width: "800px",
              height: "500px",
              maxWidth: "500px",
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>
        <Grid sx={{ width: "50%" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              borderBottom: "3px solid #5da6c1",
              display: "inline-block",
              mx: "auto",
              mb: 2,
            }}
          >
            Effortless Formalities Redefined
          </Typography>
          <Grid>
            <Typography variant="body1" sx={{fontFamily : "sans-serif",fontWeight:"540"}}>
              Embark on a journey where post-matching formalities transcend the
              ordinary. Within our groundbreaking app, you not only discover
              your ideal match but also revolutionize the way you navigate
              through formalities. It's all seamless, efficient, and completely
              at your fingertips. Effortlessly maneuver through post-matching
              processes, transforming intricate tasks into a walk in the park.
              Encounter a paradigm shift in agreement handling - sign with
              utmost simplicity, speed, and ease. Experience substantial time
              and paperwork savings, enabling you to concentrate on what truly
              matters. The submission of government proofs has never been more
              polished; our app simplifies complexity effortlessly.
            </Typography>

            {/* Feature Highlights */}
            <Grid container spacing={2}>
  {/* Left Side Features */}
  <Grid item xs={12} sm={6}>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container alignItems="center">
          <SendIcon sx={{ color: "orangered", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Effortless Post-Matching Formalities
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <SendIcon sx={{ color: "orangered", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Government Proof Submission Made Easy
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  {/* Right Side Features */}
  <Grid item xs={12} sm={6}>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container alignItems="center">
          <SendIcon sx={{ color: "orangered", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Streamlined Agreement Signing
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <SendIcon sx={{ color: "orangered", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Time and Paperwork Savings
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default About;
