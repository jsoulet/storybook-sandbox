import React from "react";
import Toggle, { Props } from "./Toggle";
import { Story, Meta } from '@storybook/react';

export default {
  title: "Toggle",
  component: Toggle,
  args: {
    label: "Click me",
    onChange: () => {}
  },
} as Meta<Props>;

const Template:Story<Props> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
