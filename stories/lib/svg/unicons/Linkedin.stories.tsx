import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Linkedin, LinkedinPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Linkedin",
  component: Linkedin,
} as ComponentMeta<typeof Linkedin>;

const Template: ComponentStory<typeof Linkedin> = (args: LinkedinPropsI) => (
  <x.div display="flex" gap="20px">
    <Linkedin {...args} />
    <Linkedin {...args} fill="red.500" />
    <Linkedin {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
