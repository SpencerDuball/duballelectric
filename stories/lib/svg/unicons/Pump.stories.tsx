import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pump, PumpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pump",
  component: Pump,
} as ComponentMeta<typeof Pump>;

const Template: ComponentStory<typeof Pump> = (args: PumpPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Pump {...args} />
    <Pump {...args} fill="red.500" />
    <Pump {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
