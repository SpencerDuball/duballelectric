import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  FacebookMessengerAlt,
  FacebookMessengerAltPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FacebookMessengerAlt",
  component: FacebookMessengerAlt,
} as ComponentMeta<typeof FacebookMessengerAlt>;

const Template: ComponentStory<typeof FacebookMessengerAlt> = (
  args: FacebookMessengerAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FacebookMessengerAlt {...args} />
    <FacebookMessengerAlt {...args} fill="red.500" />
    <FacebookMessengerAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
