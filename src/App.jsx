import "./App.css";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { BasicForm } from "./BasicForm";


function App() {
  const names = ["Muradcherry", "Paahil", "Daahil", "Jaayu"]

  const users = [
    {
      name: "Muradcherry",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },

    {
      name: "Cherry",
      pic: "https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg"
    },

    {
      name: "Daahil",
      pic: "https://wallpapers.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg"
    },
    {
      name: "Paahil",
      pic: "https://wallpapers.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg"
    },

  ];


  const navigate = useNavigate();

  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgStyles = {
    borderRadius: '0px',
    minHeight: '100vh',
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={bgStyles} elevation={4} >
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate("/")} color="inherit">Home</Button>
              <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
              <Button onClick={() => navigate("/tic-tac-toe")} color="inherit">Tic Tac Toe</Button>
              <Button onClick={() => navigate("/color-game")} color="inherit">Color Game</Button>
              <Button onClick={() => navigate("/movies/add")} color="inherit">Add Movie</Button>
              <Button
                sx={{ marginLeft: "auto" }}
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                color="inherit"
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              >
                {mode === 'dark' ? 'light' : 'dark'} Mode
              </Button>


            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="/movies" element={<MovieList />} />
            {/* //id -> dynamic // */}
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper >
    </ThemeProvider >
  );
}
export default App;//default export


