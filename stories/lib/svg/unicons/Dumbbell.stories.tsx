import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Dumbbell, DumbbellPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dumbbell",
  component: Dumbbell,
} as ComponentMeta<typeof Dumbbell>;

const Template: ComponentStory<typeof Dumbbell> = (args: DumbbellPropsI) => (
  <Box display="flex" gap="20px">
    <Dumbbell {...args} />
    <Dumbbell {...args} fill="red.500" />
    <Dumbbell {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
