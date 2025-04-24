import React from "react";
import { Box, Button, Typography, Modal, Stack } from "@mui/material";
import image from "../assets/home.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTH_PATH } from "../Router/RouthPath";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 460,
  borderRadius: "10px",
  height: 300,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "rgba(255, 255, 255, 0.9)",
};

export const BasicModal = ({ handleClose }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    setOpen(true);
  }, []);

  const handleSelfClick = () => {
    setOpen(false);
    handleClose(); // Tells Layout to hide the modal and show <Outlet />
    navigate(ROUTH_PATH.HOME); // Navigate to the home page
  };

  return (
   
    <Modal
      open={open}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        bgcolor: "#f0f2f5",
        minHeight: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
      }}
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h5" align="center" gutterBottom>
          Welcome
        </Typography>

        <Stack spacing={2} direction="row" mt={3}>
          <Button
            sx={{
              background: "#fc4c01",
              color: "white",
              borderRadius: "8px",
              width: "150px",
            }}
            color="
              primary"
            onClick={() => window.open("https://finalty.in/", "_blank")}
          >
            Fintech
          </Button>
          <Button
            sx={{
              background: "#fc4c01",
              color: "white",
              borderRadius: "8px",
              width: "150px",
            }}
            color="primary"
            onClick={handleSelfClick}
          >
            Fintech My Self
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
