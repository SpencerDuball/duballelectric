import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Dribbble, DribbblePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Dribbble",
  component: Dribbble,
} as ComponentMeta<typeof Dribbble>;

const Template: ComponentStory<typeof Dribbble> = (args: DribbblePropsI) => (
  <x.div display="flex" gap="20px">
    <Dribbble {...args} />
    <Dribbble {...args} fill="red.500" />
    <Dribbble {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
