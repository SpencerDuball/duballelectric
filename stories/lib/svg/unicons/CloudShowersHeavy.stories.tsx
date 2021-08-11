import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudShowersHeavy, CloudShowersHeavyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShowersHeavy",
  component: CloudShowersHeavy,
} as ComponentMeta<typeof CloudShowersHeavy>;

const Template: ComponentStory<typeof CloudShowersHeavy> = (
  args: CloudShowersHeavyPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudShowersHeavy {...args} />
    <CloudShowersHeavy {...args} fill="red.500" />
    <CloudShowersHeavy {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
