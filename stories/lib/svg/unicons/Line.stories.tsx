import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Line, LinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Line",
  component: Line,
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args: LinePropsI) => (
  <Box display="flex" gap="20px">
    <Line {...args} />
    <Line {...args} fill="red.500" />
    <Line {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
