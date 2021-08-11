import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AccessibleIconAlt, AccessibleIconAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AccessibleIconAlt",
  component: AccessibleIconAlt,
} as ComponentMeta<typeof AccessibleIconAlt>;

const Template: ComponentStory<typeof AccessibleIconAlt> = (
  args: AccessibleIconAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AccessibleIconAlt {...args} />
    <AccessibleIconAlt {...args} fill="red.500" />
    <AccessibleIconAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
