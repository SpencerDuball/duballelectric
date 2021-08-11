import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FacebookF, FacebookFPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FacebookF",
  component: FacebookF,
} as ComponentMeta<typeof FacebookF>;

const Template: ComponentStory<typeof FacebookF> = (args: FacebookFPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FacebookF {...args} />
    <FacebookF {...args} fill="red.500" />
    <FacebookF {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
