import styled from 'styled-components/native';

export const StyledView = styled.View`
    background-color: black;
    font-size: 18px;
    flex:1;
    justify-content:${({justify}) => justify ?? "center"};
    align-items:center;
    &:focus{
        padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
    }
`;

export const StyledText = styled.Text`
    color: #5cca0e;
    font-size: 38px;
`;

export const StyledTextInput = styled.TextInput`
    color: white;
    font-size: 38px;
    margin-top:2%;
`;


