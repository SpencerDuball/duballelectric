import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Wheelchair, WheelchairPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wheelchair",
  component: Wheelchair,
} as ComponentMeta<typeof Wheelchair>;

const Template: ComponentStory<typeof Wheelchair> = (
  args: WheelchairPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Wheelchair {...args} />
    <Wheelchair {...args} fill="red.500" />
    <Wheelchair {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
