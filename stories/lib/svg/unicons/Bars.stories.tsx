import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bars, BarsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bars",
  component: Bars,
} as ComponentMeta<typeof Bars>;

const Template: ComponentStory<typeof Bars> = (args: BarsPropsI) => (
  <Box display="flex" gap="20px">
    <Bars {...args} />
    <Bars {...args} fill="red.500" />
    <Bars {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
