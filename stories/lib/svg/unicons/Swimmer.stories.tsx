import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Swimmer, SwimmerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Swimmer",
  component: Swimmer,
} as ComponentMeta<typeof Swimmer>;

const Template: ComponentStory<typeof Swimmer> = (args: SwimmerPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Swimmer {...args} />
    <Swimmer {...args} fill="red.500" />
    <Swimmer {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
