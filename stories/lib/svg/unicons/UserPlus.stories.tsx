import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserPlus, UserPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserPlus",
  component: UserPlus,
} as ComponentMeta<typeof UserPlus>;

const Template: ComponentStory<typeof UserPlus> = (args: UserPlusPropsI) => (
  <x.div display="flex" gap="20px">
    <UserPlus {...args} />
    <UserPlus {...args} fill="red.500" />
    <UserPlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
