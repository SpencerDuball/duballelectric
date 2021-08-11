import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignRight, AlignRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignRight",
  component: AlignRight,
} as ComponentMeta<typeof AlignRight>;

const Template: ComponentStory<typeof AlignRight> = (
  args: AlignRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignRight {...args} />
    <AlignRight {...args} fill="red.500" />
    <AlignRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
