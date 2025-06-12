import { useState } from "react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Favorite, GitHub } from "@mui/icons-material";

const figmaTheme = createTheme({
  cssVariables: true,
  modularCssLayers: true,
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
      light: "#ff5983",
      dark: "#9a0036",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 24px",
          fontSize: "0.875rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          "&:hover": {
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          },
        },
      },
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={figmaTheme}>
        <CssBaseline />
        <Container
          maxWidth="md"
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: 4,
          }}
        >
          <Box textAlign="center" mb={4}>
            <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
              <Box
                component="img"
                src="/vite.svg"
                alt="Vite logo"
                sx={{ height: 64, width: 64 }}
              />
              <Favorite
                sx={{
                  fontSize: 64,
                  color: "secondary.main",
                  alignSelf: "center",
                }}
              />
              <GitHub
                sx={{
                  fontSize: 64,
                  color: "primary.main",
                  alignSelf: "center",
                }}
              />
            </Stack>

            <Typography variant="h1" gutterBottom>
              Material UI + Vite
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={4}>
              A modern React application with Material UI and custom
              Figma-inspired design system
            </Typography>
          </Box>

          <Card sx={{ maxWidth: 400, mx: "auto", mb: 4 }}>
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h2" mb={2}>
                Interactive Counter
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={() => setCount((count) => count + 1)}
                sx={{ mb: 2, minWidth: 200 }}
              >
                Count is {count}
              </Button>

              <Typography variant="body1" color="text.secondary">
                Click the button to increment the counter
              </Typography>
            </CardContent>
          </Card>

          <Box textAlign="center">
            <Typography variant="body1" color="text.secondary">
              Edit <code>src/App.tsx</code> and save to test HMR
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
