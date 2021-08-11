import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SlidersV, SlidersVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SlidersV",
  component: SlidersV,
} as ComponentMeta<typeof SlidersV>;

const Template: ComponentStory<typeof SlidersV> = (args: SlidersVPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SlidersV {...args} />
    <SlidersV {...args} fill="red.500" />
    <SlidersV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
