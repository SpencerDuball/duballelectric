import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExpandAlt, ExpandAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandAlt",
  component: ExpandAlt,
} as ComponentMeta<typeof ExpandAlt>;

const Template: ComponentStory<typeof ExpandAlt> = (args: ExpandAltPropsI) => (
  <Box display="flex" gap="20px">
    <ExpandAlt {...args} />
    <ExpandAlt {...args} fill="red.500" />
    <ExpandAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
