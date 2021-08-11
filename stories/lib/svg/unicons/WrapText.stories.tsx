import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WrapText, WrapTextPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WrapText",
  component: WrapText,
} as ComponentMeta<typeof WrapText>;

const Template: ComponentStory<typeof WrapText> = (args: WrapTextPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <WrapText {...args} />
    <WrapText {...args} fill="red.500" />
    <WrapText {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
