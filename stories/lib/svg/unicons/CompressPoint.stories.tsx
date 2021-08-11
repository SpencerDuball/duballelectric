import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompressPoint, CompressPointPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressPoint",
  component: CompressPoint,
} as ComponentMeta<typeof CompressPoint>;

const Template: ComponentStory<typeof CompressPoint> = (
  args: CompressPointPropsI
) => (
  <Box display="flex" gap="20px">
    <CompressPoint {...args} />
    <CompressPoint {...args} fill="red.500" />
    <CompressPoint {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
