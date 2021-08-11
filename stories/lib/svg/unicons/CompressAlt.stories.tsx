import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompressAlt, CompressAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressAlt",
  component: CompressAlt,
} as ComponentMeta<typeof CompressAlt>;

const Template: ComponentStory<typeof CompressAlt> = (
  args: CompressAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CompressAlt {...args} />
    <CompressAlt {...args} fill="red.500" />
    <CompressAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
