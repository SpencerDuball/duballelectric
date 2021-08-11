import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WifiRouter, WifiRouterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WifiRouter",
  component: WifiRouter,
} as ComponentMeta<typeof WifiRouter>;

const Template: ComponentStory<typeof WifiRouter> = (
  args: WifiRouterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WifiRouter {...args} />
    <WifiRouter {...args} fill="red.500" />
    <WifiRouter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
