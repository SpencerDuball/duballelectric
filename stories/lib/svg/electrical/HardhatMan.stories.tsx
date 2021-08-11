import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HardhatMan, HardhatManPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/HardhatMan",
  component: HardhatMan,
} as ComponentMeta<typeof HardhatMan>;

const Template: ComponentStory<typeof HardhatMan> = (
  args: HardhatManPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HardhatMan {...args} />
    <HardhatMan {...args} fill="red.500" />
    <HardhatMan {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
