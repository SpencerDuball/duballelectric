import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Calender, CalenderPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Calender",
  component: Calender,
} as ComponentMeta<typeof Calender>;

const Template: ComponentStory<typeof Calender> = (args: CalenderPropsI) => (
  <Box display="flex" gap="20px">
    <Calender {...args} />
    <Calender {...args} fill="red.500" />
    <Calender {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
