import {
    Box,
    TextField,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Snackbar,
    Alert,
    Divider,
    Button,
    Card,
    CardContent,
  } from "@mui/material";
  import { useState } from "react";
  import UploadFileIcon from "@mui/icons-material/UploadFileTwoTone";
import { useNavigate } from "react-router-dom";
import { ROUTH_PATH } from "../Router/RouthPath";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  
  const AddFile = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [tempFile, setTempFile] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [formValues, setFormValues] = useState({ name: "" });
    const navigate = useNavigate()

    const handleDialogOpen = () => {
      if (!formValues.name.trim()) {
        setSnackbarMessage("Please enter your name .");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
        return;
      }
      setOpenDialog(true);
    };
  
    const handleDialogClose = () => {
      setTempFile(null);
      setOpenDialog(false);
    };
  
    const handleTempFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const maxSize = 5 * 1024 * 1024;
      const PDF = file.type === "application/pdf";
  
      if (!PDF) {
        setSnackbarMessage("Only PDF files are allowed.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        return;
      }
  
      if (file.size > maxSize) {
        setSnackbarMessage("File size must be less than 5MB.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        return;
      }
  
      setTempFile(file);
    };
  
    const handleUpload = () => {
        if (tempFile) {
          setSelectedFile(tempFile);
          setSnackbarMessage("File added successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setOpenDialog(false);
          setTimeout(() => {
            navigate(ROUTH_PATH.LAYOUT); 
          }, 1000);
        }
      };
  
    const handleSnackbarClose = (event, reason) => {
      if (reason === "clickaway") return;
      setSnackbarOpen(false);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));
    };
  
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="#f9fafb"
      >
        <Card sx={{ p: 4, width: 400, boxShadow: 3 }}>
        <ArrowBackIcon sx={{color:"gray",cursor:"pointer"}} onClick={()=>navigate(-1)}  />
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Upload File
            </Typography>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
              size="medium"
              sx={{ mb: 3 }}
            />
  
            <Box
              sx={{
                backgroundColor: "#f4f6f8",
                padding: "12px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                onClick={handleDialogOpen}
                sx={{ textTransform: "none" }}
                disabled={!formValues.name.trim()}
              >
                {selectedFile ? "Update File" : "Add File"}
              </Button>
              {selectedFile && (
                <Typography
                  sx={{ mt: 1, wordBreak: "break-word", fontSize: "14px" }}
                >
                  {selectedFile.name}
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
  
        {/* File Upload Dialog */}
        <Dialog open={openDialog}>
          <DialogTitle textAlign="center" fontWeight="bold">
            Upload File
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Box
              sx={{
                width: "300px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  border: "1px solid gray",
                  backgroundColor: "#F5F7F9",
                }}
              >
                <label
                  htmlFor="file-upload"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <UploadFileIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">Choose File</Typography>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleTempFileChange}
                />
              </Button>
            </Box>
            {tempFile && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Selected File: {tempFile.name}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Button
                onClick={handleDialogClose}
                sx={{ fontWeight: "bold", color: "black" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpload}
                variant="contained"
                disabled={!tempFile}
                sx={{ backgroundColor: "#fc4c01" }}
              >
                Upload
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
  
        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    );
  };
  
  export default AddFile;
  