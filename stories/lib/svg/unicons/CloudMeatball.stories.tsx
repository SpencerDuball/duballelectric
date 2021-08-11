import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudMeatball, CloudMeatballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudMeatball",
  component: CloudMeatball,
} as ComponentMeta<typeof CloudMeatball>;

const Template: ComponentStory<typeof CloudMeatball> = (
  args: CloudMeatballPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudMeatball {...args} />
    <CloudMeatball {...args} fill="red.500" />
    <CloudMeatball {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
