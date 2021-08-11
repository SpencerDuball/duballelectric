import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Font, FontPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Font",
  component: Font,
} as ComponentMeta<typeof Font>;

const Template: ComponentStory<typeof Font> = (args: FontPropsI) => (
  <Box display="flex" gap="20px">
    <Font {...args} />
    <Font {...args} fill="red.500" />
    <Font {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
