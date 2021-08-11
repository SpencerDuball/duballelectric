import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageTimes, ImageTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageTimes",
  component: ImageTimes,
} as ComponentMeta<typeof ImageTimes>;

const Template: ComponentStory<typeof ImageTimes> = (
  args: ImageTimesPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageTimes {...args} />
    <ImageTimes {...args} fill="red.500" />
    <ImageTimes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
