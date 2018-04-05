import React from 'react';
import {Row, Input, Button} from 'react-materialize';
import states from './states';

const ShippingInfo = ({handleClick, handleChange}) => {
  return (
    <div className="shippingInfo">
      <h2>Shipping Information</h2>
      <Row>
        <Input 
          s={12} 
          label="Adress Line 1" 
          icon="location_city" 
          name="address1"
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={12} 
          label="Adress Line 2" 
          icon="location_city"
          name="address2" 
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={6} 
          label="City" 
          icon="location_city"
          name="city"  
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={3} 
          type="select" 
          label="State" 
          defaultValue="AL"
          name="state"  
          onChange={(e) => handleChange(e)}
        >
        {Object.keys(states).map((state, index)=><option key={index} value={state}>{state}</option>)}
        </Input>
        <Input 
          s={3} 
          label="Zip Code"
          name="zip"  
          onChange={(e) => handleChange(e)}
        />
        <Input 
          s={6} 
          label="Telephone" 
          icon="phone" 
          validate type="tel"
          name="phone"  
          onChange={(e) => handleChange(e)}
        />
      </Row>
      <Button 
        waves="light" 
        name="shippingInfo" 
        onClick={(e) => handleClick(e)}
      >
      Next Page
      </Button>
    </div>
  )
}

export default ShippingInfo;