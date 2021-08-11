import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TimesSquare, TimesSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TimesSquare",
  component: TimesSquare,
} as ComponentMeta<typeof TimesSquare>;

const Template: ComponentStory<typeof TimesSquare> = (
  args: TimesSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <TimesSquare {...args} />
    <TimesSquare {...args} fill="red.500" />
    <TimesSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
