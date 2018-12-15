import React from 'react';
import { Link } from 'react-router-dom';

import { FieldsCollection, ButtonsCollection } from '../../components';

const Registration = () => (
  <div className="page-wrap">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form action="">
            <div className="text-center"><h3>Sign Up</h3></div>
            <div className="form-group">
              <div className="form-row">
                <FieldsCollection.Input label="Login" required />
              </div>
              <div className="form-row">
                <FieldsCollection.Input label="Email" type="email" required />
              </div>
              <div className="form-row">
                <FieldsCollection.Input label="Password" type="password" required />
              </div>
              <div className="form-row">
                <FieldsCollection.Input label="Repeat password" type="password" required />
              </div>
            </div>
            <div className="form-group">
                You haven already account ,
              <Link to="sign-in">Sign Up</Link>
?
            </div>
            <ButtonsCollection.Button className="Button">Log In</ButtonsCollection.Button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
export default Registration;
