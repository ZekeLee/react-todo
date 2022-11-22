import styled from 'styled-components';

const HeaderEl = styled.header`
  padding-bottom: 1rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderEl>
      <h1>할 일 목록</h1>
    </HeaderEl>
  );
};

export default Header;
