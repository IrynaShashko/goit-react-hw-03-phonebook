import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
`;
export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    rgba(58, 161, 180, 0.8491771708683473) 0%,
    rgba(252, 69, 186, 0.5298494397759104) 100%
  );
`;
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContactsName = styled.p`
  font-size: 16px;
  margin: 0 auto;
  align-items: center;
`;
export const ContactsNumber = styled.p`
  font-size: 14px;
  margin: 0;
`;
export const ContactsItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  padding: 10px;
  height: 14px;
  border: 1px solid #ccc;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.75);
  background: linear-gradient(
    146deg,
    rgba(236, 218, 72, 0.7483368347338936) 0%,
    rgba(152, 69, 252, 0.7315301120448179) 100%
  );
`;
