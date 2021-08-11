import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Laptop, LaptopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Laptop",
  component: Laptop,
} as ComponentMeta<typeof Laptop>;

const Template: ComponentStory<typeof Laptop> = (args: LaptopPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Laptop {...args} />
    <Laptop {...args} fill="red.500" />
    <Laptop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
