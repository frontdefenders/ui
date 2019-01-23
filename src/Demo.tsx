import * as React from 'react';
import { Column, Grid, Row } from './lib/Grid';

const Demo = () => (
  <>
    <h1>Frontdefenders ❤️ UI</h1>
    <Grid>
      <Row>
        <Column xs={12}>Column 12</Column>
        <Column xs={12}>Column 12</Column>
        <Column xs={24} sm={12} md={6}>
          Column 1
        </Column>
        <Column xs={24} sm={12} md={6}>
          Column 1
        </Column>
        <Column xs={24} sm={12} md={6}>
          Column 2
        </Column>
        <Column xs={24} sm={12} md={6}>
          Column 2
        </Column>
      </Row>
    </Grid>
    <Grid>
      <Row>
        <Column xs={11}>Column 11</Column>
      </Row>
    </Grid>
  </>
);

export default Demo;
