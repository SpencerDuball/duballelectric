import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UnlockAlt, UnlockAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UnlockAlt",
  component: UnlockAlt,
} as ComponentMeta<typeof UnlockAlt>;

const Template: ComponentStory<typeof UnlockAlt> = (args: UnlockAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <UnlockAlt {...args} />
    <UnlockAlt {...args} fill="red.500" />
    <UnlockAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
