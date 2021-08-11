import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignLetterRight, AlignLetterRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignLetterRight",
  component: AlignLetterRight,
} as ComponentMeta<typeof AlignLetterRight>;

const Template: ComponentStory<typeof AlignLetterRight> = (
  args: AlignLetterRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignLetterRight {...args} />
    <AlignLetterRight {...args} fill="red.500" />
    <AlignLetterRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
