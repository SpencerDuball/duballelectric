import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Copy, CopyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Copy",
  component: Copy,
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = (args: CopyPropsI) => (
  <x.div display="flex" gap="20px">
    <Copy {...args} />
    <Copy {...args} fill="red.500" />
    <Copy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
