import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Lightbulbs, LightbulbsPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Lightbulbs",
  component: Lightbulbs,
} as ComponentMeta<typeof Lightbulbs>;

const Template: ComponentStory<typeof Lightbulbs> = (
  args: LightbulbsPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Lightbulbs {...args} />
    <Lightbulbs {...args} fill="red.500" />
    <Lightbulbs {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
