import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WatchAlt, WatchAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WatchAlt",
  component: WatchAlt,
} as ComponentMeta<typeof WatchAlt>;

const Template: ComponentStory<typeof WatchAlt> = (args: WatchAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <WatchAlt {...args} />
    <WatchAlt {...args} fill="red.500" />
    <WatchAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
