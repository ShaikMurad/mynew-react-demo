import "./App.css";
import { Welcome } from "./Welcome";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";

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
      <MovieList />
      {/* <AddColor /> */}


    </div>
  );
}


