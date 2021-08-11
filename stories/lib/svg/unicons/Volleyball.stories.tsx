import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Volleyball, VolleyballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Volleyball",
  component: Volleyball,
} as ComponentMeta<typeof Volleyball>;

const Template: ComponentStory<typeof Volleyball> = (
  args: VolleyballPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Volleyball {...args} />
    <Volleyball {...args} fill="red.500" />
    <Volleyball {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
