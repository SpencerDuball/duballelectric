import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SubwayAlt, SubwayAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SubwayAlt",
  component: SubwayAlt,
} as ComponentMeta<typeof SubwayAlt>;

const Template: ComponentStory<typeof SubwayAlt> = (args: SubwayAltPropsI) => (
  <Box display="flex" gap="20px">
    <SubwayAlt {...args} />
    <SubwayAlt {...args} fill="red.500" />
    <SubwayAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
