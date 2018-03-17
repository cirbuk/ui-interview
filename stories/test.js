import React  from 'react';

import { storiesOf } from '@storybook/react';

import TestComponent from '../src/TestComponent/index';

storiesOf('TestComponent', module)
  .add('Default', () => (
    <TestComponent>This is a test component</TestComponent>
  ));