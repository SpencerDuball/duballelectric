import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Stretcher, StretcherPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Stretcher",
  component: Stretcher,
} as ComponentMeta<typeof Stretcher>;

const Template: ComponentStory<typeof Stretcher> = (args: StretcherPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Stretcher {...args} />
    <Stretcher {...args} fill="red.500" />
    <Stretcher {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
