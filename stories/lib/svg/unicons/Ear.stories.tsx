import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Ear, EarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ear",
  component: Ear,
} as ComponentMeta<typeof Ear>;

const Template: ComponentStory<typeof Ear> = (args: EarPropsI) => (
  <Box display="flex" gap="20px">
    <Ear {...args} />
    <Ear {...args} fill="red.500" />
    <Ear {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
