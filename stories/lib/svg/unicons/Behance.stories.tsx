import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Behance, BehancePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Behance",
  component: Behance,
} as ComponentMeta<typeof Behance>;

const Template: ComponentStory<typeof Behance> = (args: BehancePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Behance {...args} />
    <Behance {...args} fill="red.500" />
    <Behance {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
