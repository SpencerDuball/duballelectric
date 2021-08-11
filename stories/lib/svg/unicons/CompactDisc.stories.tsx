import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompactDisc, CompactDiscPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompactDisc",
  component: CompactDisc,
} as ComponentMeta<typeof CompactDisc>;

const Template: ComponentStory<typeof CompactDisc> = (
  args: CompactDiscPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CompactDisc {...args} />
    <CompactDisc {...args} fill="red.500" />
    <CompactDisc {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
