import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Layers, LayersPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Layers",
  component: Layers,
} as ComponentMeta<typeof Layers>;

const Template: ComponentStory<typeof Layers> = (args: LayersPropsI) => (
  <Box display="flex" gap="20px">
    <Layers {...args} />
    <Layers {...args} fill="red.500" />
    <Layers {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
