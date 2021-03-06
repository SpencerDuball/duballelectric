import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Shuffle, ShufflePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shuffle",
  component: Shuffle,
} as ComponentMeta<typeof Shuffle>;

const Template: ComponentStory<typeof Shuffle> = (args: ShufflePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Shuffle {...args} />
    <Shuffle {...args} fill="red.500" />
    <Shuffle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
