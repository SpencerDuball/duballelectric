import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HindiToChinese, HindiToChinesePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HindiToChinese",
  component: HindiToChinese,
} as ComponentMeta<typeof HindiToChinese>;

const Template: ComponentStory<typeof HindiToChinese> = (
  args: HindiToChinesePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HindiToChinese {...args} />
    <HindiToChinese {...args} fill="red.500" />
    <HindiToChinese {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
