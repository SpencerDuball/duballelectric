import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClipboardBlank, ClipboardBlankPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClipboardBlank",
  component: ClipboardBlank,
} as ComponentMeta<typeof ClipboardBlank>;

const Template: ComponentStory<typeof ClipboardBlank> = (
  args: ClipboardBlankPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ClipboardBlank {...args} />
    <ClipboardBlank {...args} fill="red.500" />
    <ClipboardBlank {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
