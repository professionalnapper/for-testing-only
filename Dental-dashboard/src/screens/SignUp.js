import React from 'react';
import { Button, Input } from '../components/Form';
import { BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex-colo bg-dry">
      <form className="w-2/5 p-8 rounded-2xl mx-auto bg-white flex-colo">
        <img
          src="/images/healthflow-logo.png"
          alt="logo"
          className="w-48 h-16 object-contain"
        />
        <div className="flex flex-col gap-4 w-full mb-6">
          <Input
            label="Name"
            type="text"
            color={true}
            placeholder="Your name"
          />
          <Input
            label="Username"
            type="text"
            color={true}
            placeholder="Your username"
          />
          <Input
            label="Password"
            type="password"
            color={true}
            placeholder="*********"
          />
          <Input
            label="Confirm Password"
            type="ConPassword"
            color={true}
            placeholder="*********"
          />
          <Input
            label="Email"
            type="email"
            color={true}
            placeholder="Your email"
          />
          <Input
            label="Phone Number"
            type="tel"
            color={true}
            placeholder="Your phone number"
          />
        </div>
        <Button
          label="Register"
          Icon={BiLogInCircle}
          onClick={() => navigate('/')}
        />
      </form>
    </div>
  );
}

export default SignUp;