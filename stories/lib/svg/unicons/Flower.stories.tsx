import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Flower, FlowerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Flower",
  component: Flower,
} as ComponentMeta<typeof Flower>;

const Template: ComponentStory<typeof Flower> = (args: FlowerPropsI) => (
  <Box display="flex" gap="20px">
    <Flower {...args} />
    <Flower {...args} fill="red.500" />
    <Flower {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
