import PropTypes from 'prop-types';
import { TitleContainer, Title } from './TitlePage.styled';

const TitlePage = ({ children }) => {
  return (
    <TitleContainer>
      <Title>{children}</Title>
    </TitleContainer>
  );
};

TitlePage.propTypes = {
  children: PropTypes.any.isRequired,
};

export default TitlePage;
