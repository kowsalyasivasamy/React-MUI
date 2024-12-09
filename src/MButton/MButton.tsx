import {
  Button,
  createTheme,
  Stack,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Delete, Send, Chat } from "@mui/icons-material";
import { lime } from "@mui/material/colors";
import "./MButton.scss";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF", // optional
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F", // optional
    },
  },
});

const MButton = () => {
  return (
    <>
      {/* variant - text, contained, outlined */}
      <Stack direction={"row"} spacing={2} className="custom-stack">
        <Button className="text-button" variant="text">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* color - primary, secondary, success, error, warning, info */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>

      {/* Using theme provider*/}
      <Stack direction={"row"} spacing={2}>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            Palette-Primary
          </Button>
          <Button variant="contained" color="secondary">
            Palette-Secondary
          </Button>
        </ThemeProvider>
      </Stack>

      {/* size - small, medium, large */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* Adding Icons using startIcon */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" startIcon={<Delete />} color="secondary">
          Small
        </Button>
        <Button variant="contained" startIcon={<Send />} color="secondary">
          Medium
        </Button>
        <Button variant="contained" endIcon={<Chat />} color="secondary">
          Large
        </Button>
      </Stack>

      {/* IconButton */}
      <Stack direction={"row"} spacing={1}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="disabled-delete" disabled>
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" color="primary">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" color="secondary">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <Delete fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <Delete fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <Delete fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <Delete fontSize="small" />
        </IconButton>
      </Stack>

      {/* LoadingButton */}
      <Stack direction={"row"} spacing={2}>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      </Stack>
    </>
  );
};

export default MButton;
