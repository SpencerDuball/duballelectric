import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TemperaturePlus, TemperaturePlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperaturePlus",
  component: TemperaturePlus,
} as ComponentMeta<typeof TemperaturePlus>;

const Template: ComponentStory<typeof TemperaturePlus> = (
  args: TemperaturePlusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TemperaturePlus {...args} />
    <TemperaturePlus {...args} fill="red.500" />
    <TemperaturePlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
