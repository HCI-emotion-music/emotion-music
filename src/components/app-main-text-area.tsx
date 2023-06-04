const AppMainTextArea = () => {
    return (
        <div className="py-10">
        <label htmlFor="" className="block">
          <span className="text-xl/2 mb-2 font-medium text-gray-900 tracking-tighter">
            Text
          </span>
        </label>

        <div className="mt-2">
          <textarea
            className="block p-4 w-full rounded-lg text-gray-700 outline-none border border-gray-300 resize-none transition duration-200 text-lg"
            placeholder="오늘 당신의 감정을 적어주세요." 
          />
        </div>
      </div>
    );
}

export default AppMainTextArea;