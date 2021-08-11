import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeartAlt, HeartAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeartAlt",
  component: HeartAlt,
} as ComponentMeta<typeof HeartAlt>;

const Template: ComponentStory<typeof HeartAlt> = (args: HeartAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <HeartAlt {...args} />
    <HeartAlt {...args} fill="red.500" />
    <HeartAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
