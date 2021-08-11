import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { KeySkeletonAlt, KeySkeletonAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeySkeletonAlt",
  component: KeySkeletonAlt,
} as ComponentMeta<typeof KeySkeletonAlt>;

const Template: ComponentStory<typeof KeySkeletonAlt> = (
  args: KeySkeletonAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <KeySkeletonAlt {...args} />
    <KeySkeletonAlt {...args} fill="red.500" />
    <KeySkeletonAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
