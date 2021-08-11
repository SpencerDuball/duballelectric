import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudWind, CloudWindPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudWind",
  component: CloudWind,
} as ComponentMeta<typeof CloudWind>;

const Template: ComponentStory<typeof CloudWind> = (args: CloudWindPropsI) => (
  <Box display="flex" gap="20px">
    <CloudWind {...args} />
    <CloudWind {...args} fill="red.500" />
    <CloudWind {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
