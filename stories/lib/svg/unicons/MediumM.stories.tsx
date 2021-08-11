import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MediumM, MediumMPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MediumM",
  component: MediumM,
} as ComponentMeta<typeof MediumM>;

const Template: ComponentStory<typeof MediumM> = (args: MediumMPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <MediumM {...args} />
    <MediumM {...args} fill="red.500" />
    <MediumM {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
