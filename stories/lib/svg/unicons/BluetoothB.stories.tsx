import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BluetoothB, BluetoothBPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BluetoothB",
  component: BluetoothB,
} as ComponentMeta<typeof BluetoothB>;

const Template: ComponentStory<typeof BluetoothB> = (
  args: BluetoothBPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BluetoothB {...args} />
    <BluetoothB {...args} fill="red.500" />
    <BluetoothB {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
