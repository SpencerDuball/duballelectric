import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleLeft, AngleLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleLeft",
  component: AngleLeft,
} as ComponentMeta<typeof AngleLeft>;

const Template: ComponentStory<typeof AngleLeft> = (args: AngleLeftPropsI) => (
  <Box display="flex" gap="20px">
    <AngleLeft {...args} />
    <AngleLeft {...args} fill="red.500" />
    <AngleLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
