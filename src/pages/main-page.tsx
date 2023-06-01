import AppMenu from "../components/app-menu";
import AppMainTitle from "../components/app-main-title";
import AppMainPhotoUpload from "../components/app-main-photo-upload";
import AppMainSubmitButton from "../components/app-main-submit-button";

const MainPage = () => {
  return (
    <div>
      <AppMenu />
      <AppMainTitle />

      <div className="px-20">
        <AppMainPhotoUpload />


        {/* TEXT */}
        <div className="py-10">
          <label
            htmlFor=""
            className="block text-xl/2 font-medium leading-6 text-gray-900"
          >
            Text
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="text"
              id="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="오늘 당신의 감정을 적어주세요."
            />
          </div>
        </div>

        <AppMainSubmitButton />
      </div>
    </div>

    

  );
};

export default MainPage;
