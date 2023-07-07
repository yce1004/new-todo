import React from 'react'
import styled from 'styled-components'


const TodoTemplate = ({children}) => {
  return (
    <TotoWrapper>
      <AppTitle>Todo List 📑</AppTitle>
      <Content>
        {children}
      </Content>
    </TotoWrapper>
  )
}

const TotoWrapper = styled.div`
  width : 512px;
  margin : 6rem auto 0;
  border-radius : 4px;
  overflow : hidden;
  box-shadow : 0 0 5px #ccc;
  
`;

const AppTitle = styled.h1`
  background : #b454fa;
  font-size : 40px;
  height : 4rem;
  display :flex;
  justify-content : center;
  align-items : center;
  color : #fff;
  font-weight : 400;
`;

const Content = styled.div`
  background : #fff;
`;

export default TodoTemplate