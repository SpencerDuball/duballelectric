import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ThunderstormMoon, ThunderstormMoonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThunderstormMoon",
  component: ThunderstormMoon,
} as ComponentMeta<typeof ThunderstormMoon>;

const Template: ComponentStory<typeof ThunderstormMoon> = (
  args: ThunderstormMoonPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ThunderstormMoon {...args} />
    <ThunderstormMoon {...args} fill="red.500" />
    <ThunderstormMoon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
