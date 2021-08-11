import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FacebookMessenger, FacebookMessengerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FacebookMessenger",
  component: FacebookMessenger,
} as ComponentMeta<typeof FacebookMessenger>;

const Template: ComponentStory<typeof FacebookMessenger> = (
  args: FacebookMessengerPropsI
) => (
  <Box display="flex" gap="20px">
    <FacebookMessenger {...args} />
    <FacebookMessenger {...args} fill="red.500" />
    <FacebookMessenger {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
