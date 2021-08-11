import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TrashAlt, TrashAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TrashAlt",
  component: TrashAlt,
} as ComponentMeta<typeof TrashAlt>;

const Template: ComponentStory<typeof TrashAlt> = (args: TrashAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <TrashAlt {...args} />
    <TrashAlt {...args} fill="red.500" />
    <TrashAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
