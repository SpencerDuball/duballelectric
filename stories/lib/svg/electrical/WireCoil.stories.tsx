import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WireCoil, WireCoilPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/WireCoil",
  component: WireCoil,
} as ComponentMeta<typeof WireCoil>;

const Template: ComponentStory<typeof WireCoil> = (args: WireCoilPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <WireCoil {...args} />
    <WireCoil {...args} fill="red.500" />
    <WireCoil {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
