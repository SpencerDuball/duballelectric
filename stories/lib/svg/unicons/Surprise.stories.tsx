import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Surprise, SurprisePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Surprise",
  component: Surprise,
} as ComponentMeta<typeof Surprise>;

const Template: ComponentStory<typeof Surprise> = (args: SurprisePropsI) => (
  <Box display="flex" gap="20px">
    <Surprise {...args} />
    <Surprise {...args} fill="red.500" />
    <Surprise {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
