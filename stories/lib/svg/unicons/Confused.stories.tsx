import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Confused, ConfusedPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Confused",
  component: Confused,
} as ComponentMeta<typeof Confused>;

const Template: ComponentStory<typeof Confused> = (args: ConfusedPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Confused {...args} />
    <Confused {...args} fill="red.500" />
    <Confused {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
