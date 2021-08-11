import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Phone, PhonePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Phone",
  component: Phone,
} as ComponentMeta<typeof Phone>;

const Template: ComponentStory<typeof Phone> = (args: PhonePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Phone {...args} />
    <Phone {...args} fill="red.500" />
    <Phone {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
