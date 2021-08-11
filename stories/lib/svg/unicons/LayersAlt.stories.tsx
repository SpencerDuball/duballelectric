import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LayersAlt, LayersAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LayersAlt",
  component: LayersAlt,
} as ComponentMeta<typeof LayersAlt>;

const Template: ComponentStory<typeof LayersAlt> = (args: LayersAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <LayersAlt {...args} />
    <LayersAlt {...args} fill="red.500" />
    <LayersAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
