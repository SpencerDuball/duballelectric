import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ElectricalTape, ElectricalTapePropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/ElectricalTape",
  component: ElectricalTape,
} as ComponentMeta<typeof ElectricalTape>;

const Template: ComponentStory<typeof ElectricalTape> = (
  args: ElectricalTapePropsI
) => (
  <Box display="flex" gap="20px">
    <ElectricalTape {...args} />
    <ElectricalTape {...args} fill="red.500" />
    <ElectricalTape {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
