import React,{useState} from 'react';
import { StyledText,StyledView,StyledTextInput } from '../styles/StyledComp';
import {Button} from '../styles/StyledComp2';

function AddScreen (props) {
  const {setProducts} = props.route.params
  const [name, setName] = useState([]);
  

  const handleSaveProduct = () =>{
    if (name) {
     
      setProducts((current)=>[name,...current]);
      setName((current) => current = "");
    }else{
      alert("Add a name of product")
    }
    
  }
    return(
      <StyledView justify={"start"}>
      <StyledText>Add to cart</StyledText>

      <StyledTextInput
        onChangeText={setName}
        value={name}
        placeholder="Product"
        keyboardType="text"
      />

      <Button onClick={() => handleSaveProduct()} >Add</Button>
      
      </StyledView>
    )
  }
  export default AddScreen;