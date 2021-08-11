import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudBlock, CloudBlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudBlock",
  component: CloudBlock,
} as ComponentMeta<typeof CloudBlock>;

const Template: ComponentStory<typeof CloudBlock> = (
  args: CloudBlockPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudBlock {...args} />
    <CloudBlock {...args} fill="red.500" />
    <CloudBlock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
