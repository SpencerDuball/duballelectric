import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TumblrSquare, TumblrSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TumblrSquare",
  component: TumblrSquare,
} as ComponentMeta<typeof TumblrSquare>;

const Template: ComponentStory<typeof TumblrSquare> = (
  args: TumblrSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <TumblrSquare {...args} />
    <TumblrSquare {...args} fill="red.500" />
    <TumblrSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
