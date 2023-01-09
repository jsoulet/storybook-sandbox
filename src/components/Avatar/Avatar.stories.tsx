import Avatar from "./Avatar";
import { UserProvider } from "./UserContext";
export default {
  title: "Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <UserProvider>
        <Story />
      </UserProvider>
    )
  ]
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const WithAPhoto = Template.bind({});
WithAPhoto.decorators = [
  (Story) => (
    <UserProvider avatar="https://i.ibb.co/WcXc2sC/26.jpg">
      <Story />
    </UserProvider>
  )
];
