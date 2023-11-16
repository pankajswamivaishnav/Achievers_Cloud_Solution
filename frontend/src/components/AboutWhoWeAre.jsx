import React from "react";
import "./css/aboutwhoweare.css";
const AboutWhoWeAre = () => {
  return (
    <section className="who-we-are-sec">
      <div className="container-fluid ">
        <div className="container cotum-who-we-are-container">
          <div className="row costum-who-we-are-row">
            {/* Left Part */}
            <div className="col-xl-6 col-lg-6">
              <div className="col-xl-12">
                <h2 className="who-we-are-heading">Who We Are</h2>
              </div>
              <div className="col-xl-12">
                <p className="who-we-are-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur vel esse ex ipsa a, sapiente iusto. Est sit dolores
                  numquam, officia, quae a corporis deleniti non ab consequatur
                  molestias officiis hic impedit maiores vero enim unde debitis
                  sunt consequuntur. Eveniet repellat, sint perspiciatis iste
                  laudantium consectetur incidunt est quo consequatur modi
                  corporis provident quibusdam voluptatibus inventore nostrum
                  exercitationem molestias quis. Mollitia nemo nobis, eligendi
                  impedit doloribus sit quia aspernatur delectus ea at quos
                  rerum necessitatibus consequatur sed vel voluptatum asperiores
                  eveniet saepe enim? Natus nisi, reiciendis beatae odit
                  voluptas error delectus eum quibusdam explicabo porro,
                  repudiandae sequi expedita officia consequatur? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Eligendi sunt
                  magni qui quae, sit excepturi quos ratione saepe eos facilis,
                  quas pariatur, omnis voluptas alias tempore illum quisquam nam
                  perspiciatis cupiditate provident atque dignissimos modi et?
                  Deserunt, rerum exercitationem architecto expedita minima
                  dolores minus, deleniti consequuntur, labore assumenda soluta
                  repellat!
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <img
                src="https://img.freepik.com/free-vector/teamwork-concept-illustration_1284-20522.jpg?w=826&t=st=1699015148~exp=1699015748~hmac=3973025941336bc86f354dd9565d69847ba9dd492a049dd61cfd5c412bcd7bc9"
                alt="random-img"
                className="img-fluid who-we-are-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
