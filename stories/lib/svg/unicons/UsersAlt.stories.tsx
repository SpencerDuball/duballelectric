import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UsersAlt, UsersAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UsersAlt",
  component: UsersAlt,
} as ComponentMeta<typeof UsersAlt>;

const Template: ComponentStory<typeof UsersAlt> = (args: UsersAltPropsI) => (
  <x.div display="flex" gap="20px">
    <UsersAlt {...args} />
    <UsersAlt {...args} fill="red.500" />
    <UsersAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
