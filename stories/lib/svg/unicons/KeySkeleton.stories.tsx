import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { KeySkeleton, KeySkeletonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeySkeleton",
  component: KeySkeleton,
} as ComponentMeta<typeof KeySkeleton>;

const Template: ComponentStory<typeof KeySkeleton> = (
  args: KeySkeletonPropsI
) => (
  <Box display="flex" gap="20px">
    <KeySkeleton {...args} />
    <KeySkeleton {...args} fill="red.500" />
    <KeySkeleton {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
