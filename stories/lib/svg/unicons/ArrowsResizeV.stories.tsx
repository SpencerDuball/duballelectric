import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsResizeV, ArrowsResizeVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsResizeV",
  component: ArrowsResizeV,
} as ComponentMeta<typeof ArrowsResizeV>;

const Template: ComponentStory<typeof ArrowsResizeV> = (
  args: ArrowsResizeVPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowsResizeV {...args} />
    <ArrowsResizeV {...args} fill="red.500" />
    <ArrowsResizeV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
