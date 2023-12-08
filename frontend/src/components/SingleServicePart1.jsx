// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./css/singleServicePart1.css";
// import Points from "./shared/Points";
// // import serviceSolutions from "./temp_data/SingleServicePart1Points";
// const SingleServicePart1 = () => {
//   const location = useLocation();
//   const [currentURL, setCurrentURL] = useState("");
//   useEffect(() => {
//     // Get the current URL from the location object
//     const { pathname, search, hash } = location;
//     const url = `${pathname}${search}${hash}`;
//     const segments = url.split("/");
//     const desiredContent = segments[1];
//     setCurrentURL(desiredContent);
//   }, [location]);
//   return (
//     <section className="single-service-part1-sec">
//       <div className="container-fluid">
//         <div className="container">
//           <h2>Customized Web Development Solutions</h2>
//           <p>
//             Discover Your Ideal Web Solution: Our team specializes in creating
//             distinct web-based applications, each uniquely designed for an
//             unparalleled digital experience."
//           </p>
//           {/* Points */}
//           <div className="row">
//             <div className="col-xl-6">
//               <Points />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleServicePart1;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/singleServicePart1.css";
import Points from "./shared/Points";
import serviceSolutions from "./temp_data/SingleServicePart1Points";

const SingleServicePart1 = () => {
  const location = useLocation();
  //   const [currentURL, setCurrentURL] = useState("");
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    // Get the current URL from the location object
    const { pathname, search, hash } = location;
    const url = `${pathname}${search}${hash}`;
    const segments = url.split("/");
    const desiredContent = segments[1];
    // setCurrentURL(desiredContent);

    // Find data based on current URL
    const foundService = serviceSolutions.find(
      (service) => service.service === desiredContent
    );
    setServiceData(foundService);
  }, [location]);

  return (
    <section className="single-service-part1-sec">
      <div className="container-fluid">
        <div className="container">
          {serviceData && (
            <>
              <h2>{serviceData.title}</h2>
              <p>{serviceData.subTitle}</p>
              {/* Points */}
              <div className="row">
                {serviceData.solutions.map((solution, index) => (
                  <div className="col-xl-6" key={index}>
                    <Points key={index} solution={solution} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleServicePart1;
