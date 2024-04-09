import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: 20px auto;
  flex-direction: column;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const EditButton = styled.button`
  margin-left: 10px;
`;

export const MetadataContainer = styled.div`
  margin-bottom: 10px;
`;

export const MetadataItem = styled.span`
  margin-right: 10px;
`;

export const Content = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

export const ContentText = styled.pre`
  font-family: 'Roboto';
  font-size: 1.23rem;
  white-space: pre-wrap;
`;
