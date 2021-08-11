import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HomeAlt, HomeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HomeAlt",
  component: HomeAlt,
} as ComponentMeta<typeof HomeAlt>;

const Template: ComponentStory<typeof HomeAlt> = (args: HomeAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <HomeAlt {...args} />
    <HomeAlt {...args} fill="red.500" />
    <HomeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
