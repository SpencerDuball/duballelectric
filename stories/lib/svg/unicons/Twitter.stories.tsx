import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Twitter, TwitterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Twitter",
  component: Twitter,
} as ComponentMeta<typeof Twitter>;

const Template: ComponentStory<typeof Twitter> = (args: TwitterPropsI) => (
  <Box display="flex" gap="20px">
    <Twitter {...args} />
    <Twitter {...args} fill="red.500" />
    <Twitter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
