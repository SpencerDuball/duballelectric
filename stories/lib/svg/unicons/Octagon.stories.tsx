import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Octagon, OctagonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Octagon",
  component: Octagon,
} as ComponentMeta<typeof Octagon>;

const Template: ComponentStory<typeof Octagon> = (args: OctagonPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Octagon {...args} />
    <Octagon {...args} fill="red.500" />
    <Octagon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
