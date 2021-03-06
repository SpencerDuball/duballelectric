import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Eye, EyePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Eye",
  component: Eye,
} as ComponentMeta<typeof Eye>;

const Template: ComponentStory<typeof Eye> = (args: EyePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Eye {...args} />
    <Eye {...args} fill="red.500" />
    <Eye {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
