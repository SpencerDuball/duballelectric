import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Modem, ModemPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Modem",
  component: Modem,
} as ComponentMeta<typeof Modem>;

const Template: ComponentStory<typeof Modem> = (args: ModemPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Modem {...args} />
    <Modem {...args} fill="red.500" />
    <Modem {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
