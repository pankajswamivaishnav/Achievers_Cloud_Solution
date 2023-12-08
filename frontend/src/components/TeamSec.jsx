import React from "react";
import TeamCard from "./shared/TeamCard";
import teamMemberData from "./temp_data/teamData";
import "./css/teamsec.css";
const TeamSec = () => {
  return (
    <section className="about_team_sec">
      <div className="container-fluid">
        <div className="container">
          {/* Team Block Header */}
          <div className="row my-5">
            <div className="col-xl-8 col-md-12 col-sm-12">
              <div className="about-team-heading">TEAM</div>
              <h2 className="about-team-heading-para">
                Our Experts Team Members
              </h2>
            </div>

            <div className="col-xl-4 col-md-12 col-sm-12">
              <a href="/contact-us" className="btn-link">
                <button
                  to="/contact-us"
                  type="button"
                  className="costum-btn float-xl-end float-md-start"
                >
                  See More
                </button>
              </a>
            </div>
          </div>
          {/* Team Card Block */}
          <div className="row">
            {teamMemberData.slice(0, 6).map((data) => {
              return (
                <TeamCard
                  fbLink={data.fbLink}
                  twLink={data.twLink}
                  skLink={data.skLink}
                  liLink={data.liLink}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  position={data.position}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
