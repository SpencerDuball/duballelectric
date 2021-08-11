import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MultimeterAlt, MultimeterAltPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/MultimeterAlt",
  component: MultimeterAlt,
} as ComponentMeta<typeof MultimeterAlt>;

const Template: ComponentStory<typeof MultimeterAlt> = (
  args: MultimeterAltPropsI
) => (
  <Box display="flex" gap="20px">
    <MultimeterAlt {...args} />
    <MultimeterAlt {...args} fill="red.500" />
    <MultimeterAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
