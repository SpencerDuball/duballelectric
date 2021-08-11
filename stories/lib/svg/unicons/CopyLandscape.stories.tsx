import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CopyLandscape, CopyLandscapePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CopyLandscape",
  component: CopyLandscape,
} as ComponentMeta<typeof CopyLandscape>;

const Template: ComponentStory<typeof CopyLandscape> = (
  args: CopyLandscapePropsI
) => (
  <Box display="flex" gap="20px">
    <CopyLandscape {...args} />
    <CopyLandscape {...args} fill="red.500" />
    <CopyLandscape {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
