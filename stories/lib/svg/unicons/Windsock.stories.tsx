import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Windsock, WindsockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Windsock",
  component: Windsock,
} as ComponentMeta<typeof Windsock>;

const Template: ComponentStory<typeof Windsock> = (args: WindsockPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Windsock {...args} />
    <Windsock {...args} fill="red.500" />
    <Windsock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
