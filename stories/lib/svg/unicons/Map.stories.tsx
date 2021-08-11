import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Map, MapPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Map",
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args: MapPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Map {...args} />
    <Map {...args} fill="red.500" />
    <Map {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
