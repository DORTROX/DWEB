import React from "react";
import "../../Css/Kaizen.css";

const Kaizen = () => {
  return (
    <div>
      <div className="mainKaizenAv">
        <div className="mainKaizenL">
          <div className="card">
            <div className="banner">
              <img
                src="https://images-ext-2.discordapp.net/external/svWnW8zzXsvp7cMRUVy45gsmNkwli76oRNE29Aw3nO0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/b2fbe11f5d7c76272d29ff6affce5f14.png?width=480&height=480"
                alt=""
              />
            </div>
            <div className="about">
              <div className="abContent">
                <h6>Username:</h6>
                <p>DORTROX#5211</p>
                <h6>Email</h6>
                <p>dortrox.1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainKaizenR">
        <div className="buttonFlex">
            <div className="buttons">
              <p>Change Avatar</p>
              <p>Change Name</p>
              <p>Go to Kaizen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kaizen;
