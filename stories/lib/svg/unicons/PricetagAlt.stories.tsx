import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PricetagAlt, PricetagAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PricetagAlt",
  component: PricetagAlt,
} as ComponentMeta<typeof PricetagAlt>;

const Template: ComponentStory<typeof PricetagAlt> = (
  args: PricetagAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PricetagAlt {...args} />
    <PricetagAlt {...args} fill="red.500" />
    <PricetagAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
