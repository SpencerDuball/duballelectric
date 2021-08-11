import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudCheck, CloudCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudCheck",
  component: CloudCheck,
} as ComponentMeta<typeof CloudCheck>;

const Template: ComponentStory<typeof CloudCheck> = (
  args: CloudCheckPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudCheck {...args} />
    <CloudCheck {...args} fill="red.500" />
    <CloudCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
