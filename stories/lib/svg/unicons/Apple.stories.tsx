import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Apple, ApplePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Apple",
  component: Apple,
} as ComponentMeta<typeof Apple>;

const Template: ComponentStory<typeof Apple> = (args: ApplePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Apple {...args} />
    <Apple {...args} fill="red.500" />
    <Apple {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
