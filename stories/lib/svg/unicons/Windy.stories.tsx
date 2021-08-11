import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Windy, WindyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Windy",
  component: Windy,
} as ComponentMeta<typeof Windy>;

const Template: ComponentStory<typeof Windy> = (args: WindyPropsI) => (
  <Box display="flex" gap="20px">
    <Windy {...args} />
    <Windy {...args} fill="red.500" />
    <Windy {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
