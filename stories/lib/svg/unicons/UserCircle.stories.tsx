import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserCircle, UserCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserCircle",
  component: UserCircle,
} as ComponentMeta<typeof UserCircle>;

const Template: ComponentStory<typeof UserCircle> = (
  args: UserCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <UserCircle {...args} />
    <UserCircle {...args} fill="red.500" />
    <UserCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
