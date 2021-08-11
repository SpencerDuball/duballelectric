import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Toolbox, ToolboxPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Toolbox",
  component: Toolbox,
} as ComponentMeta<typeof Toolbox>;

const Template: ComponentStory<typeof Toolbox> = (args: ToolboxPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Toolbox {...args} />
    <Toolbox {...args} fill="red.500" />
    <Toolbox {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
