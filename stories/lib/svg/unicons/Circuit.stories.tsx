import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Circuit, CircuitPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Circuit",
  component: Circuit,
} as ComponentMeta<typeof Circuit>;

const Template: ComponentStory<typeof Circuit> = (args: CircuitPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Circuit {...args} />
    <Circuit {...args} fill="red.500" />
    <Circuit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
