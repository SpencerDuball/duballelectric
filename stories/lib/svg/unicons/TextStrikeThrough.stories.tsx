import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TextStrikeThrough, TextStrikeThroughPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TextStrikeThrough",
  component: TextStrikeThrough,
} as ComponentMeta<typeof TextStrikeThrough>;

const Template: ComponentStory<typeof TextStrikeThrough> = (
  args: TextStrikeThroughPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TextStrikeThrough {...args} />
    <TextStrikeThrough {...args} fill="red.500" />
    <TextStrikeThrough {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
