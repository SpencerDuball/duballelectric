import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudShowersAlt, CloudShowersAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShowersAlt",
  component: CloudShowersAlt,
} as ComponentMeta<typeof CloudShowersAlt>;

const Template: ComponentStory<typeof CloudShowersAlt> = (
  args: CloudShowersAltPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudShowersAlt {...args} />
    <CloudShowersAlt {...args} fill="red.500" />
    <CloudShowersAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
