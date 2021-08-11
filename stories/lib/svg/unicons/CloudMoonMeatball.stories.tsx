import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudMoonMeatball, CloudMoonMeatballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudMoonMeatball",
  component: CloudMoonMeatball,
} as ComponentMeta<typeof CloudMoonMeatball>;

const Template: ComponentStory<typeof CloudMoonMeatball> = (
  args: CloudMoonMeatballPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudMoonMeatball {...args} />
    <CloudMoonMeatball {...args} fill="red.500" />
    <CloudMoonMeatball {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
