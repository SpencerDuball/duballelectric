import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SlackAlt, SlackAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SlackAlt",
  component: SlackAlt,
} as ComponentMeta<typeof SlackAlt>;

const Template: ComponentStory<typeof SlackAlt> = (args: SlackAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SlackAlt {...args} />
    <SlackAlt {...args} fill="red.500" />
    <SlackAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
