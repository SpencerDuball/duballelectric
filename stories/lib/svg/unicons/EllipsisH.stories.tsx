import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EllipsisH, EllipsisHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EllipsisH",
  component: EllipsisH,
} as ComponentMeta<typeof EllipsisH>;

const Template: ComponentStory<typeof EllipsisH> = (args: EllipsisHPropsI) => (
  <Box display="flex" gap="20px">
    <EllipsisH {...args} />
    <EllipsisH {...args} fill="red.500" />
    <EllipsisH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
