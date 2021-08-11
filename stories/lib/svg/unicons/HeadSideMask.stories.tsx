import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeadSideMask, HeadSideMaskPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeadSideMask",
  component: HeadSideMask,
} as ComponentMeta<typeof HeadSideMask>;

const Template: ComponentStory<typeof HeadSideMask> = (
  args: HeadSideMaskPropsI
) => (
  <Box display="flex" gap="20px">
    <HeadSideMask {...args} />
    <HeadSideMask {...args} fill="red.500" />
    <HeadSideMask {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
