import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pathfinder, PathfinderPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pathfinder",
  component: Pathfinder,
} as ComponentMeta<typeof Pathfinder>;

const Template: ComponentStory<typeof Pathfinder> = (
  args: PathfinderPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Pathfinder {...args} />
    <Pathfinder {...args} fill="red.500" />
    <Pathfinder {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
