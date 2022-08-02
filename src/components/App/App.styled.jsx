import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: radial-gradient(
    circle,
    #eff2aa,
    #ffd89a,
    #ffbda7,
    #ffa9ca,
    #f4a6f4
  );
`;
export const PhonebookContainer = styled.div`
  margin 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: #f5f5f5;
  background-image: radial-gradient(
    circle, 
    #eff2aa, 
    #ffd89a, 
    #ffbda7, 
    #ffa9ca, 
    #f4a6f4);
  box-shadow: 0px 2px 5px 4px rgba(0, 0, 0, 0.75);
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
  margin: 0;
  text-shadow: -1px 0px 14px rgba(51, 154, 255, 1);
`;
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 0;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: -1px 0px 14px rgba(51, 154, 255, 1);
`;
