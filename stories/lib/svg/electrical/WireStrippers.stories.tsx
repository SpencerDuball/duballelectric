import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WireStrippers, WireStrippersPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/WireStrippers",
  component: WireStrippers,
} as ComponentMeta<typeof WireStrippers>;

const Template: ComponentStory<typeof WireStrippers> = (
  args: WireStrippersPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WireStrippers {...args} />
    <WireStrippers {...args} fill="red.500" />
    <WireStrippers {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
