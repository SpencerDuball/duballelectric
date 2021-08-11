import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnglishToChinese, EnglishToChinesePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnglishToChinese",
  component: EnglishToChinese,
} as ComponentMeta<typeof EnglishToChinese>;

const Template: ComponentStory<typeof EnglishToChinese> = (
  args: EnglishToChinesePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnglishToChinese {...args} />
    <EnglishToChinese {...args} fill="red.500" />
    <EnglishToChinese {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
