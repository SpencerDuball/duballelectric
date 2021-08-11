import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PanoramaH, PanoramaHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PanoramaH",
  component: PanoramaH,
} as ComponentMeta<typeof PanoramaH>;

const Template: ComponentStory<typeof PanoramaH> = (args: PanoramaHPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <PanoramaH {...args} />
    <PanoramaH {...args} fill="red.500" />
    <PanoramaH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
