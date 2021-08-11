import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Clouds, CloudsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Clouds",
  component: Clouds,
} as ComponentMeta<typeof Clouds>;

const Template: ComponentStory<typeof Clouds> = (args: CloudsPropsI) => (
  <Box display="flex" gap="20px">
    <Clouds {...args} />
    <Clouds {...args} fill="red.500" />
    <Clouds {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
