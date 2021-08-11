import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Css3Simple, Css3SimplePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Css3Simple",
  component: Css3Simple,
} as ComponentMeta<typeof Css3Simple>;

const Template: ComponentStory<typeof Css3Simple> = (
  args: Css3SimplePropsI
) => (
  <Box display="flex" gap="20px">
    <Css3Simple {...args} />
    <Css3Simple {...args} fill="red.500" />
    <Css3Simple {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
