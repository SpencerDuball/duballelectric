import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Toolbox, ToolboxPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Toolbox",
  component: Toolbox,
} as ComponentMeta<typeof Toolbox>;

const Template: ComponentStory<typeof Toolbox> = (args: ToolboxPropsI) => (
  <x.div display="flex" gap="20px">
    <Toolbox {...args} />
    <Toolbox {...args} fill="red.500" />
    <Toolbox {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
