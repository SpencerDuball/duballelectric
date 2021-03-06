import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Euro, EuroPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Euro",
  component: Euro,
} as ComponentMeta<typeof Euro>;

const Template: ComponentStory<typeof Euro> = (args: EuroPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Euro {...args} />
    <Euro {...args} fill="red.500" />
    <Euro {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
