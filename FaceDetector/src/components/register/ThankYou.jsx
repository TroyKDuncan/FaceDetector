// import React from "react";

// const timer = setTimeout(() => {

// })

// const ThankYou = () => {
//     return (
//         <div>
//             <p>Thank you for signing up!</p>
//             <p>Go ahead and sign in next</p>
//         </div>
//     )
// }

// export default ThankYou;

import React, { useEffect } from "react";

const ThankYou = ({ onRouteChange }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRouteChange("signIn");
    }, 3000);

    // Cleanup function to clear the timeout on unmount or re-render
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="px-4 py-2 text-white w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 space-y-4 md:space-y-6 sm:p-8 flex flex-col items-center text-xl">
          <p>Thank you for signing up!</p>
          <p>Here is the sign in page!</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
