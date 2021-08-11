import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudMoonHail, CloudMoonHailPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudMoonHail",
  component: CloudMoonHail,
} as ComponentMeta<typeof CloudMoonHail>;

const Template: ComponentStory<typeof CloudMoonHail> = (
  args: CloudMoonHailPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudMoonHail {...args} />
    <CloudMoonHail {...args} fill="red.500" />
    <CloudMoonHail {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
