import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { User, UserPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/User",
  component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args: UserPropsI) => (
  <x.div display="flex" gap="20px">
    <User {...args} />
    <User {...args} fill="red.500" />
    <User {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
