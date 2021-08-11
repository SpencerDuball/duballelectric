import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Rotate360, Rotate360PropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Rotate360",
  component: Rotate360,
} as ComponentMeta<typeof Rotate360>;

const Template: ComponentStory<typeof Rotate360> = (args: Rotate360PropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Rotate360 {...args} />
    <Rotate360 {...args} fill="red.500" />
    <Rotate360 {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
