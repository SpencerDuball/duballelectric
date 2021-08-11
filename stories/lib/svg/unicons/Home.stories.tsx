import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Home, HomePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args: HomePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Home {...args} />
    <Home {...args} fill="red.500" />
    <Home {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
