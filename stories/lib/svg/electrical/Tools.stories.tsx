import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tools, ToolsPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Tools",
  component: Tools,
} as ComponentMeta<typeof Tools>;

const Template: ComponentStory<typeof Tools> = (args: ToolsPropsI) => (
  <x.div display="flex" gap="20px">
    <Tools {...args} />
    <Tools {...args} fill="red.500" />
    <Tools {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
