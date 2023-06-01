import { PhotoIcon } from "@heroicons/react/24/solid";
import AppMenu from "../components/app-menu";

const MainPage = () => {
  return (
    <div>
      <AppMenu />
      <form>
        <div>
          <h1>FACE&TEXT</h1>
        </div>
        {/* PHOTO */}
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 text-gray-300"
              area-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1"> or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
        {/* TEXT */}
        <div>
          <label
            htmlFor=""
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Text
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="text"
              id="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="입력해주세요."
            />
          </div>
        </div>
      </form>
    </div>

  );
};

export default MainPage;
