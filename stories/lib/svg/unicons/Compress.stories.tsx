import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Compress, CompressPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Compress",
  component: Compress,
} as ComponentMeta<typeof Compress>;

const Template: ComponentStory<typeof Compress> = (args: CompressPropsI) => (
  <Box display="flex" gap="20px">
    <Compress {...args} />
    <Compress {...args} fill="red.500" />
    <Compress {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
