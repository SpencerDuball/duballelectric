import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Grin, GrinPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Grin",
  component: Grin,
} as ComponentMeta<typeof Grin>;

const Template: ComponentStory<typeof Grin> = (args: GrinPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Grin {...args} />
    <Grin {...args} fill="red.500" />
    <Grin {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
