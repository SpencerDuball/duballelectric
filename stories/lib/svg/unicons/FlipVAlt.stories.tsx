import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FlipVAlt, FlipVAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FlipVAlt",
  component: FlipVAlt,
} as ComponentMeta<typeof FlipVAlt>;

const Template: ComponentStory<typeof FlipVAlt> = (args: FlipVAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FlipVAlt {...args} />
    <FlipVAlt {...args} fill="red.500" />
    <FlipVAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
