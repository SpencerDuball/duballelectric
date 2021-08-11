import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WindowGrid, WindowGridPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WindowGrid",
  component: WindowGrid,
} as ComponentMeta<typeof WindowGrid>;

const Template: ComponentStory<typeof WindowGrid> = (
  args: WindowGridPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WindowGrid {...args} />
    <WindowGrid {...args} fill="red.500" />
    <WindowGrid {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
