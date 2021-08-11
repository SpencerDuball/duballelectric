import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Cog, CogPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Cog",
  component: Cog,
} as ComponentMeta<typeof Cog>;

const Template: ComponentStory<typeof Cog> = (args: CogPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Cog {...args} />
    <Cog {...args} fill="red.500" />
    <Cog {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
