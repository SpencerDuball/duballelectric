import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Diary, DiaryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Diary",
  component: Diary,
} as ComponentMeta<typeof Diary>;

const Template: ComponentStory<typeof Diary> = (args: DiaryPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Diary {...args} />
    <Diary {...args} fill="red.500" />
    <Diary {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
