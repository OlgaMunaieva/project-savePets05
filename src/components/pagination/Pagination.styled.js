import styled from 'styled-components';
import { ReactComponent as Arrov } from 'images/icons/arrov.svg';

export const ArrovStyle = styled(Arrov)`
  stroke: #54adff;
  }
`;

export const ArrovStyleLeft = styled(ArrovStyle)`
  transform: rotate(180deg);
`;
