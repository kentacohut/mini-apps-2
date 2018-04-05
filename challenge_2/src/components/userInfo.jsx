import React from 'react';
import {Row, Input, Button} from 'react-materialize';

const UserInfo = ({handleClick, handleChange}) => {
  return (
    <div className="userInfo">
      <h2>Account Information</h2>
      <Row>
        <Input 
          s={6} 
          label="First Name" 
          icon="account_circle"
          name="first"
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={6} 
          label="Last Name"
          name="last"
          onChange={(e) => handleChange(e)}
        />
        <Input 
          type="email" 
          label="Email" 
          s={12} 
          icon="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <Input 
          type="password" 
          label="Password" 
          s={12} 
          icon="lock"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </Row>
      <Button 
        waves='light' 
        name="userInfo" 
        onClick={(e) => handleClick(e)}
      >
      Next Page</Button>
    </div>
  )
}

export default UserInfo;