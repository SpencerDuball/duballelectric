import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Wall, WallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wall",
  component: Wall,
} as ComponentMeta<typeof Wall>;

const Template: ComponentStory<typeof Wall> = (args: WallPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Wall {...args} />
    <Wall {...args} fill="red.500" />
    <Wall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
