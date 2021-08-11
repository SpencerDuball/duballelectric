import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Scroll, ScrollPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Scroll",
  component: Scroll,
} as ComponentMeta<typeof Scroll>;

const Template: ComponentStory<typeof Scroll> = (args: ScrollPropsI) => (
  <Box display="flex" gap="20px">
    <Scroll {...args} />
    <Scroll {...args} fill="red.500" />
    <Scroll {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
