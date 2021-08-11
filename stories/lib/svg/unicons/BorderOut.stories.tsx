import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderOut, BorderOutPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderOut",
  component: BorderOut,
} as ComponentMeta<typeof BorderOut>;

const Template: ComponentStory<typeof BorderOut> = (args: BorderOutPropsI) => (
  <Box display="flex" gap="20px">
    <BorderOut {...args} />
    <BorderOut {...args} fill="red.500" />
    <BorderOut {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
