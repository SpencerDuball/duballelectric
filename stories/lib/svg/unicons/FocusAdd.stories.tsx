import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FocusAdd, FocusAddPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FocusAdd",
  component: FocusAdd,
} as ComponentMeta<typeof FocusAdd>;

const Template: ComponentStory<typeof FocusAdd> = (args: FocusAddPropsI) => (
  <x.div display="flex" gap="20px">
    <FocusAdd {...args} />
    <FocusAdd {...args} fill="red.500" />
    <FocusAdd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
