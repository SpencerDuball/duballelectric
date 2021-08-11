import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Drill, DrillPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Drill",
  component: Drill,
} as ComponentMeta<typeof Drill>;

const Template: ComponentStory<typeof Drill> = (args: DrillPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Drill {...args} />
    <Drill {...args} fill="red.500" />
    <Drill {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
