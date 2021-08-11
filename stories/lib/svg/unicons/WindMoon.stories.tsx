import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WindMoon, WindMoonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WindMoon",
  component: WindMoon,
} as ComponentMeta<typeof WindMoon>;

const Template: ComponentStory<typeof WindMoon> = (args: WindMoonPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <WindMoon {...args} />
    <WindMoon {...args} fill="red.500" />
    <WindMoon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
