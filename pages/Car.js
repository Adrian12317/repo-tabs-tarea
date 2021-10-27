import React, { useEffect } from 'react';
import { StyledText,StyledView } from '../styles/StyledComp';
import { Card,ListGroup } from 'react-bootstrap';

function CarScreen (props) {
   const products = props.products
    return(
      <StyledView justify={"start"}>
      <StyledText>Car</StyledText>
      <Card style={{ 
          background:"white",
          width: "450px"
        }}>
        <strong> <Card.Header> List Of Products </Card.Header> </strong>
        <ListGroup variant="flush">
            
            {
                products?.map((product,i)=>(
                    <div key={i}>
                    <ListGroup.Item>{product}</ListGroup.Item>
                    </div>
                ))
                
            }
        </ListGroup>
        </Card>
      </StyledView>
    )
  }
  export default CarScreen;