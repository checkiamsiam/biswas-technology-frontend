import { Button, useTheme } from "@mui/material";

const MyButton = ({ children }) => {
  const theme = useTheme()
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        py: "15px",
        transition: ".4s",
        px: "65px",
        zIndex: "1",
        ":hover": {
          backgroundColor: "#FF5A00",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
