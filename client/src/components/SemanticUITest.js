import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SemanticUITest = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='pdf file outline' />
      No documents are listed for this customer.
    </Header>
    <Link to="/" as="button" className="ui primary button">Create React App Root</Link>
  </Segment>
);

export default SemanticUITest;
