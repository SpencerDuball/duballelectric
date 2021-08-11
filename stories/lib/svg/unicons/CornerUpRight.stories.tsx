import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerUpRight, CornerUpRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerUpRight",
  component: CornerUpRight,
} as ComponentMeta<typeof CornerUpRight>;

const Template: ComponentStory<typeof CornerUpRight> = (
  args: CornerUpRightPropsI
) => (
  <Box display="flex" gap="20px">
    <CornerUpRight {...args} />
    <CornerUpRight {...args} fill="red.500" />
    <CornerUpRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
