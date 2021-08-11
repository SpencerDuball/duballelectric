import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClipboardAlt, ClipboardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClipboardAlt",
  component: ClipboardAlt,
} as ComponentMeta<typeof ClipboardAlt>;

const Template: ComponentStory<typeof ClipboardAlt> = (
  args: ClipboardAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ClipboardAlt {...args} />
    <ClipboardAlt {...args} fill="red.500" />
    <ClipboardAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
