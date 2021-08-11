import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BagAlt, BagAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BagAlt",
  component: BagAlt,
} as ComponentMeta<typeof BagAlt>;

const Template: ComponentStory<typeof BagAlt> = (args: BagAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BagAlt {...args} />
    <BagAlt {...args} fill="red.500" />
    <BagAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
