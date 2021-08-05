import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Signout, SignoutPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Signout",
  component: Signout,
} as ComponentMeta<typeof Signout>;

const Template: ComponentStory<typeof Signout> = (args: SignoutPropsI) => (
  <x.div display="flex" gap="20px">
    <Signout {...args} />
    <Signout {...args} fill="red.500" />
    <Signout {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
