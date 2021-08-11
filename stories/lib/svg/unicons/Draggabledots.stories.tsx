import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Draggabledots, DraggabledotsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Draggabledots",
  component: Draggabledots,
} as ComponentMeta<typeof Draggabledots>;

const Template: ComponentStory<typeof Draggabledots> = (
  args: DraggabledotsPropsI
) => (
  <Box display="flex" gap="20px">
    <Draggabledots {...args} />
    <Draggabledots {...args} fill="red.500" />
    <Draggabledots {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
