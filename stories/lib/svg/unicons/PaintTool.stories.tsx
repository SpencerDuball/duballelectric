import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PaintTool, PaintToolPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PaintTool",
  component: PaintTool,
} as ComponentMeta<typeof PaintTool>;

const Template: ComponentStory<typeof PaintTool> = (args: PaintToolPropsI) => (
  <x.div display="flex" gap="20px">
    <PaintTool {...args} />
    <PaintTool {...args} fill="red.500" />
    <PaintTool {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
