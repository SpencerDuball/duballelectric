import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleDown, AngleDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleDown",
  component: AngleDown,
} as ComponentMeta<typeof AngleDown>;

const Template: ComponentStory<typeof AngleDown> = (args: AngleDownPropsI) => (
  <Box display="flex" gap="20px">
    <AngleDown {...args} />
    <AngleDown {...args} fill="red.500" />
    <AngleDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
