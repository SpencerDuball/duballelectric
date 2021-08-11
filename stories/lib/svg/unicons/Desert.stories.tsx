import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Desert, DesertPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Desert",
  component: Desert,
} as ComponentMeta<typeof Desert>;

const Template: ComponentStory<typeof Desert> = (args: DesertPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Desert {...args} />
    <Desert {...args} fill="red.500" />
    <Desert {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
