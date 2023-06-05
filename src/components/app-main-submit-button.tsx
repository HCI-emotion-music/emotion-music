// const AppMainSubmitButton = () => {
//     return (
//         <div className="w-full mt-5 py-10">
//           <button className="inline-block mb-3 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">
//             Submit
//           </button> 
//         </div>
//     );
// }
 
// export default AppMainSubmitButton;
import React from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AppMainSubmitButton = ({ onClick }: Props) => {
  return (
    <div className="w-full mt-5 py-10">
      <button
        className="inline-block mb-3 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
};

export default AppMainSubmitButton;
;

