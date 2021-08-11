import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudHail, CloudHailPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudHail",
  component: CloudHail,
} as ComponentMeta<typeof CloudHail>;

const Template: ComponentStory<typeof CloudHail> = (args: CloudHailPropsI) => (
  <Box display="flex" gap="20px">
    <CloudHail {...args} />
    <CloudHail {...args} fill="red.500" />
    <CloudHail {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
