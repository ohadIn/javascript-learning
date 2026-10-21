import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import FavoriteSong from "./components/FavoriteSong";
import GameStats from "./components/GameStats";
import Story from "./components/Story";

function App() {
  return (
    <>
    <Header/>
    <br />
    <ProfileCard/>
    <br />
    <FavoriteSong/>
    <br />
    <GameStats/>
    <br />
    <h3>Stories</h3>
    <Story/>    <Story/>    <Story/>
    </>
    );
}
export default App;