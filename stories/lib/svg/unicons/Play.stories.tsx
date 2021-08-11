import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Play, PlayPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Play",
  component: Play,
} as ComponentMeta<typeof Play>;

const Template: ComponentStory<typeof Play> = (args: PlayPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Play {...args} />
    <Play {...args} fill="red.500" />
    <Play {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
