import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AdjustHalf, AdjustHalfPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AdjustHalf",
  component: AdjustHalf,
} as ComponentMeta<typeof AdjustHalf>;

const Template: ComponentStory<typeof AdjustHalf> = (
  args: AdjustHalfPropsI
) => (
  <Box display="flex" gap="20px">
    <AdjustHalf {...args} />
    <AdjustHalf {...args} fill="red.500" />
    <AdjustHalf {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
