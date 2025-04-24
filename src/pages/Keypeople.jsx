import React from "react";
import { Box, Typography, Divider, Card, CardContent, Grid, Paper } from "@mui/material";
import image1 from "../assets/photo1.png";
import image2 from "../assets/photo1.png"; 
import visionImg from "../assets/vission.png";
import missionImg from "../assets/mission.png";
import { BorderBottom } from "@mui/icons-material";
// import placeholder from "../assets/placeholder.png"; 

const KeyPeople = () => {
  const teamMembers = [
    {
      name: "Sorna Rajathy",
      position: "Director",
      image: image1
    },
    {
      name: "Merit Agasta",
      position: "Director",
      image: image2
    },
    {
      name: "Yet to reveal",
      position: "-",
      image: image1
    },
    {
      name: "Yet to reveal",
      position: "-",
      image: image1
    }
  ];

  return (
    <Box sx={{ 
      alignItems: 'center',
       
      mx: 'auto', 
      p: 4,
      bgcolor: 'background.paper'
    }}>
      {/* Main Heading */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 'bold',
          mb: 3,
          textAlign: 'center'
        }}
      >
        Key Peoples
      </Typography>
      
      {/* Subheading paragraph */}
      <Typography 
        variant="h6" 
        paragraph
        sx={{ 
          mb: 4,
          lineHeight: 1.6,
          textAlign: 'center'
        }}
      >
        Proudly led by our accomplished team, we bring a wealth of expertise and<br />
        a commitment to excellence, ensuring success in every endeavor.
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      {/* People Cards */}
      <Card sx={{margin:"0 auto",display:"flex",alignItems:"center", justifyContent:"space-evenly"}}container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
             justifyContent:"center",
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: "none",
              '&:hover': {
                boxShadow: "none",
                transform: 'translateY(-4px)',
                transition: 'all 0.3s ease'
              }
            }}>
              <Box sx={{ 
                width: 300, 
                height:300,
                overflow: 'hidden',
                mt: 3,
              
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius:"1rem",
                    // objectFit: 'cover' 
                  }} 
                />
              </Box>
              <CardContent>
                <Typography variant="h5" component="h2" fontWeight="medium">
                  {member.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  {member.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Card>
      

<Grid 
  container 
  spacing={4} 
  justifyContent="center" 
  alignItems="flex-start" 
  sx={{ margin: "5% auto 0", maxWidth: "1585px", padding: "0 1rem" }}
>
  <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img src={visionImg} alt="vision" style={{ maxWidth: "100%", height: "304px" }} />
    <Paper
      sx={{
        backgroundColor: "#F3F4F6",
        width: "100%",
        maxWidth: "716px",
        minHeight: "188px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
      }}
    >
      <Typography sx={{ fontSize: "24px", padding: "16px" }}>Vision</Typography>
      <Typography
        sx={{
          fontSize: "18px",
          padding: "16px",
          borderTop: "2px solid red",
          textAlign: "center",
        }}
      >
        Empowering landlords and tenants with seamless, accountable, and transparent rental interactions for harmonious living.
      </Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img src={missionImg} alt="mission" style={{ maxWidth: "100%", height: "304px",  }} />
    <Paper
      sx={{
        backgroundColor: "#F3F4F6",
        width: "100%",
        maxWidth: "716px",
        minHeight: "188px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
      }}
    >
      <Typography sx={{ fontSize: "24px", padding: "16px" }}>Mission</Typography>
      <Typography
        sx={{
          fontSize: "18px",
          padding: "16px",
          borderTop: "2px solid red",
          textAlign: "center",
        }}
      >
        Transforming real estate through comprehensive services, promoting harmony, and empowering property stakeholders for a sustainable future.
      </Typography>
    </Paper>
  </Grid>
</Grid>

    </Box>
  );
};

export default KeyPeople;