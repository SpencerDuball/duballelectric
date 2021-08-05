import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserCheck, UserCheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UserCheck",
  component: UserCheck,
} as ComponentMeta<typeof UserCheck>;

const Template: ComponentStory<typeof UserCheck> = (args: UserCheckPropsI) => (
  <x.div display="flex" gap="20px">
    <UserCheck {...args} />
    <UserCheck {...args} fill="red.500" />
    <UserCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
