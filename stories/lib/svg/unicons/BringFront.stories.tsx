import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BringFront, BringFrontPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BringFront",
  component: BringFront,
} as ComponentMeta<typeof BringFront>;

const Template: ComponentStory<typeof BringFront> = (
  args: BringFrontPropsI
) => (
  <Box display="flex" gap="20px">
    <BringFront {...args} />
    <BringFront {...args} fill="red.500" />
    <BringFront {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
