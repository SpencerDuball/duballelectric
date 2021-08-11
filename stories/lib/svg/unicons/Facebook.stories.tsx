import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Facebook, FacebookPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Facebook",
  component: Facebook,
} as ComponentMeta<typeof Facebook>;

const Template: ComponentStory<typeof Facebook> = (args: FacebookPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Facebook {...args} />
    <Facebook {...args} fill="red.500" />
    <Facebook {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
