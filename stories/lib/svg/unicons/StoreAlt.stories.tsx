import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StoreAlt, StoreAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StoreAlt",
  component: StoreAlt,
} as ComponentMeta<typeof StoreAlt>;

const Template: ComponentStory<typeof StoreAlt> = (args: StoreAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <StoreAlt {...args} />
    <StoreAlt {...args} fill="red.500" />
    <StoreAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
