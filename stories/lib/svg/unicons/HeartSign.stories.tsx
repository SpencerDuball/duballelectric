import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeartSign, HeartSignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeartSign",
  component: HeartSign,
} as ComponentMeta<typeof HeartSign>;

const Template: ComponentStory<typeof HeartSign> = (args: HeartSignPropsI) => (
  <Box display="flex" gap="20px">
    <HeartSign {...args} />
    <HeartSign {...args} fill="red.500" />
    <HeartSign {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
