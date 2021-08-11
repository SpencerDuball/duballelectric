import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowRandom, ArrowRandomPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowRandom",
  component: ArrowRandom,
} as ComponentMeta<typeof ArrowRandom>;

const Template: ComponentStory<typeof ArrowRandom> = (
  args: ArrowRandomPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowRandom {...args} />
    <ArrowRandom {...args} fill="red.500" />
    <ArrowRandom {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
