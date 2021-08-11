import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Info, InfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Info",
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args: InfoPropsI) => (
  <Box display="flex" gap="20px">
    <Info {...args} />
    <Info {...args} fill="red.500" />
    <Info {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
