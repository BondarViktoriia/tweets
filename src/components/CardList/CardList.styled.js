import styled from 'styled-components';

export const CardListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const LoadMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  max-width: 210px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const LoadMoreContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
