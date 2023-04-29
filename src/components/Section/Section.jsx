import PropTypes from 'prop-types';

import { Sections, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Sections>
    <Title>{title}</Title>
    {children}
  </Sections>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
