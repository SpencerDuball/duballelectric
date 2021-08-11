import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Power, PowerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Power",
  component: Power,
} as ComponentMeta<typeof Power>;

const Template: ComponentStory<typeof Power> = (args: PowerPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Power {...args} />
    <Power {...args} fill="red.500" />
    <Power {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
