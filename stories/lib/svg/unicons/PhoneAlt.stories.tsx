import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PhoneAlt, PhoneAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PhoneAlt",
  component: PhoneAlt,
} as ComponentMeta<typeof PhoneAlt>;

const Template: ComponentStory<typeof PhoneAlt> = (args: PhoneAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <PhoneAlt {...args} />
    <PhoneAlt {...args} fill="red.500" />
    <PhoneAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
