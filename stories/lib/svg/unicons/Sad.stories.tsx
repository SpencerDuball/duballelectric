import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sad, SadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sad",
  component: Sad,
} as ComponentMeta<typeof Sad>;

const Template: ComponentStory<typeof Sad> = (args: SadPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sad {...args} />
    <Sad {...args} fill="red.500" />
    <Sad {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
