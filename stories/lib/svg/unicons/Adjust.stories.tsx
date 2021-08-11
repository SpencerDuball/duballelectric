import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Adjust, AdjustPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Adjust",
  component: Adjust,
} as ComponentMeta<typeof Adjust>;

const Template: ComponentStory<typeof Adjust> = (args: AdjustPropsI) => (
  <Box display="flex" gap="20px">
    <Adjust {...args} />
    <Adjust {...args} fill="red.500" />
    <Adjust {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
