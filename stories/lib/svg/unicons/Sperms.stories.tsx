import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sperms, SpermsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sperms",
  component: Sperms,
} as ComponentMeta<typeof Sperms>;

const Template: ComponentStory<typeof Sperms> = (args: SpermsPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sperms {...args} />
    <Sperms {...args} fill="red.500" />
    <Sperms {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
