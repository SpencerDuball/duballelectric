import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Syringe, SyringePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Syringe",
  component: Syringe,
} as ComponentMeta<typeof Syringe>;

const Template: ComponentStory<typeof Syringe> = (args: SyringePropsI) => (
  <Box display="flex" gap="20px">
    <Syringe {...args} />
    <Syringe {...args} fill="red.500" />
    <Syringe {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
