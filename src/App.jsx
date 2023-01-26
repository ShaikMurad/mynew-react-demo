import "./App.css";
import { Welcome } from "./Welcome";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";

export default function App() {
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
  return (
    <div className="App">

      {/* {users.map(usr =>
        <Msg
          name={usr.name}
          pic={usr.pic}
        />
      )} */}
      {/* <Msg
        name="Murad"
        pic="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      />
      <Msg
        name="Cherry"
        pic="https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg"
      />
      <Msg
        name="Daahil"
        pic="https://wallpapers.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg"
      /> */}
      {/* <Welcome name="Muradcherry" />
      <Welcome name="Daahil" />
      <Welcome name="Paahil" /> */}

      {/* {names.map(num => <Welcome name={num} />)} */}
      {/* <Counter /> */}
      {/* <MovieList /> */}
      {/* <AddColor /> */}
      {/* <TicTacToe /> */}

      {/* Task */}
      {/* /movie -> MovieList */}
      {/* /color-game -> AddColor */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies with Link</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe Game</Link>

          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
        </ul>
      </nav>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}


