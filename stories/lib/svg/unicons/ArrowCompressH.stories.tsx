import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowCompressH, ArrowCompressHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowCompressH",
  component: ArrowCompressH,
} as ComponentMeta<typeof ArrowCompressH>;

const Template: ComponentStory<typeof ArrowCompressH> = (
  args: ArrowCompressHPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowCompressH {...args} />
    <ArrowCompressH {...args} fill="red.500" />
    <ArrowCompressH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
