import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleUp, AngleUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleUp",
  component: AngleUp,
} as ComponentMeta<typeof AngleUp>;

const Template: ComponentStory<typeof AngleUp> = (args: AngleUpPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <AngleUp {...args} />
    <AngleUp {...args} fill="red.500" />
    <AngleUp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
