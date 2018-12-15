import React from 'react';
import { Link } from 'react-router-dom';

import { FieldsCollection, ButtonsCollection } from '../../components';

const Auth = () => (
  <div className="page-wrap">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form action="">
            <div className="text-center"><h3>Sign In</h3></div>
            <div className="form-group">
              <div className="form-row">
                <FieldsCollection.Input label="Login or Email" required />
              </div>
              <div className="form-row">
                <FieldsCollection.Input label="Password" required />
              </div>
            </div>
            <div className="form-group">
                  You haven`t already account ,
              <Link to="sign-up">Sign Up</Link>?
            </div>
            <ButtonsCollection.Button className="Button">Log In</ButtonsCollection.Button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
export default Auth;
