import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sunset, SunsetPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sunset",
  component: Sunset,
} as ComponentMeta<typeof Sunset>;

const Template: ComponentStory<typeof Sunset> = (args: SunsetPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sunset {...args} />
    <Sunset {...args} fill="red.500" />
    <Sunset {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
