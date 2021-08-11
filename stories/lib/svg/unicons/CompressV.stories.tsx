import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompressV, CompressVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressV",
  component: CompressV,
} as ComponentMeta<typeof CompressV>;

const Template: ComponentStory<typeof CompressV> = (args: CompressVPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CompressV {...args} />
    <CompressV {...args} fill="red.500" />
    <CompressV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
