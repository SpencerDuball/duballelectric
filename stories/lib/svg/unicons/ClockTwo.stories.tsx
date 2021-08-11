import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClockTwo, ClockTwoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockTwo",
  component: ClockTwo,
} as ComponentMeta<typeof ClockTwo>;

const Template: ComponentStory<typeof ClockTwo> = (args: ClockTwoPropsI) => (
  <Box display="flex" gap="20px">
    <ClockTwo {...args} />
    <ClockTwo {...args} fill="red.500" />
    <ClockTwo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
