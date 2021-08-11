import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudExclamation, CloudExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudExclamation",
  component: CloudExclamation,
} as ComponentMeta<typeof CloudExclamation>;

const Template: ComponentStory<typeof CloudExclamation> = (
  args: CloudExclamationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudExclamation {...args} />
    <CloudExclamation {...args} fill="red.500" />
    <CloudExclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
