import React from "react";
import Modal, {Props} from "./Modal";
import { Story, Meta } from '@storybook/react';
export default {
  title: "Modal",
  component: Modal,
  args: {
    children: "Content",
  },
} as Meta<Props>;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args={
  renderHandler: ({setIsActive}) => <button data-testid="show-modal" onClick={() => setIsActive(true)}>Show the modal</button>,
  title: 'Title',
  footer: 'Footer',
}
