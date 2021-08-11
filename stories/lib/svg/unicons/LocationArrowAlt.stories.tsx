import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LocationArrowAlt, LocationArrowAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LocationArrowAlt",
  component: LocationArrowAlt,
} as ComponentMeta<typeof LocationArrowAlt>;

const Template: ComponentStory<typeof LocationArrowAlt> = (
  args: LocationArrowAltPropsI
) => (
  <Box display="flex" gap="20px">
    <LocationArrowAlt {...args} />
    <LocationArrowAlt {...args} fill="red.500" />
    <LocationArrowAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
