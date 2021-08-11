import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AdjustAlt, AdjustAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AdjustAlt",
  component: AdjustAlt,
} as ComponentMeta<typeof AdjustAlt>;

const Template: ComponentStory<typeof AdjustAlt> = (args: AdjustAltPropsI) => (
  <Box display="flex" gap="20px">
    <AdjustAlt {...args} />
    <AdjustAlt {...args} fill="red.500" />
    <AdjustAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
