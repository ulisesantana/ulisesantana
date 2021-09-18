import React from 'react';

import { Meta } from '@storybook/react';

import { TLDR } from './TLDR';

export default {
  title: 'Components/TLDR',
  component: TLDR,
} as Meta;

export const Default = () => <TLDR>This is a message</TLDR>;
