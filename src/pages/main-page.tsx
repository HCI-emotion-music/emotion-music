import AppMenu from "../components/app-menu";
import AppMainTitle from "../components/app-main-title";
import AppMainPhotoUpload from "../components/app-main-photo-upload";
import AppMainSubmitButton from "../components/app-main-submit-button";
import AppMainTextArea from "../components/app-main-text-area";
import SpotifyClient from "../api/spotify";

const MainPage = () => {
  return (
    <div>
      <AppMenu />
      <AppMainTitle />
      
      <div className="px-20">
        <AppMainPhotoUpload />
        <AppMainTextArea />
        <AppMainSubmitButton />
        <button onClick={ ()=> new SpotifyClient() }>spotify</button>
        {/* <button onClick={ ()=> SpotifyClient.getPositiveMusic }>happy</button> */}
      </div>
      
    </div>
  );
};

export default MainPage;
