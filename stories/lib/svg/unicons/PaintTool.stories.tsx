import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PaintTool, PaintToolPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PaintTool",
  component: PaintTool,
} as ComponentMeta<typeof PaintTool>;

const Template: ComponentStory<typeof PaintTool> = (args: PaintToolPropsI) => (
  <Box display="flex" gap="20px">
    <PaintTool {...args} />
    <PaintTool {...args} fill="red.500" />
    <PaintTool {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
