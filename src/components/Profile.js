import React from "react";
import AuthService from "../services/auth.service";
import InputForm from '../components/Pages/Content/OutputForm';
import Footer from '../components/Pages/Content/Footer';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

      <InputForm />
      <Footer/>
    </div>

    
  );
};

export default Profile;
