import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pliers, PliersPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Pliers",
  component: Pliers,
} as ComponentMeta<typeof Pliers>;

const Template: ComponentStory<typeof Pliers> = (args: PliersPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Pliers {...args} />
    <Pliers {...args} fill="red.500" />
    <Pliers {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
