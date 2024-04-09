import styled from 'styled-components';

export const CommentsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`;

export const CommentMetadata = styled.h2`
  display: flex;
  align-items: center;
`;

export const Username = styled.b`
  flex: 1;
  color: ${({ theme }) => theme.colors.primaryPink};
`;
