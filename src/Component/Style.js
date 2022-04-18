import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: #000;

  h2 {
    font-weight: 400;
    color: violet;
    font-size: 1rem;
  }

  li {
    list-style: none;
    display: inline-block;
    color: #ccc;
  }
`;

const Style = () => {
  return (
    
    
      <Header>
        <div><h2>Hello World</h2></div>
        <ul>
          <li>About</li>
        </ul>
      </Header>
   
  );
};

export default Style;