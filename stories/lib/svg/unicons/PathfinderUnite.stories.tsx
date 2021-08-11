import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PathfinderUnite, PathfinderUnitePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PathfinderUnite",
  component: PathfinderUnite,
} as ComponentMeta<typeof PathfinderUnite>;

const Template: ComponentStory<typeof PathfinderUnite> = (
  args: PathfinderUnitePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PathfinderUnite {...args} />
    <PathfinderUnite {...args} fill="red.500" />
    <PathfinderUnite {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
