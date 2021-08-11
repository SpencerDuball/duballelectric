import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiaryAlt, DiaryAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiaryAlt",
  component: DiaryAlt,
} as ComponentMeta<typeof DiaryAlt>;

const Template: ComponentStory<typeof DiaryAlt> = (args: DiaryAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DiaryAlt {...args} />
    <DiaryAlt {...args} fill="red.500" />
    <DiaryAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
