import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Polygon, PolygonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Polygon",
  component: Polygon,
} as ComponentMeta<typeof Polygon>;

const Template: ComponentStory<typeof Polygon> = (args: PolygonPropsI) => (
  <Box display="flex" gap="20px">
    <Polygon {...args} />
    <Polygon {...args} fill="red.500" />
    <Polygon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
