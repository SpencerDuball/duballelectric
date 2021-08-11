import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  HorizontalAlignRight,
  HorizontalAlignRightPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HorizontalAlignRight",
  component: HorizontalAlignRight,
} as ComponentMeta<typeof HorizontalAlignRight>;

const Template: ComponentStory<typeof HorizontalAlignRight> = (
  args: HorizontalAlignRightPropsI
) => (
  <Box display="flex" gap="20px">
    <HorizontalAlignRight {...args} />
    <HorizontalAlignRight {...args} fill="red.500" />
    <HorizontalAlignRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
