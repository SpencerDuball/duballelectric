import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Smile, SmilePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Smile",
  component: Smile,
} as ComponentMeta<typeof Smile>;

const Template: ComponentStory<typeof Smile> = (args: SmilePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Smile {...args} />
    <Smile {...args} fill="red.500" />
    <Smile {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
