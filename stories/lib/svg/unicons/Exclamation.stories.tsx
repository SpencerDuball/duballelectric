import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Exclamation, ExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Exclamation",
  component: Exclamation,
} as ComponentMeta<typeof Exclamation>;

const Template: ComponentStory<typeof Exclamation> = (
  args: ExclamationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Exclamation {...args} />
    <Exclamation {...args} fill="red.500" />
    <Exclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
