import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignLeft, AlignLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AlignLeft",
  component: AlignLeft,
} as ComponentMeta<typeof AlignLeft>;

const Template: ComponentStory<typeof AlignLeft> = (args: AlignLeftPropsI) => (
  <x.div display="flex" gap="20px">
    <AlignLeft {...args} />
    <AlignLeft {...args} fill="red.500" />
    <AlignLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
