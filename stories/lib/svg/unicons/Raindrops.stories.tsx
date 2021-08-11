import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Raindrops, RaindropsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Raindrops",
  component: Raindrops,
} as ComponentMeta<typeof Raindrops>;

const Template: ComponentStory<typeof Raindrops> = (args: RaindropsPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Raindrops {...args} />
    <Raindrops {...args} fill="red.500" />
    <Raindrops {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
