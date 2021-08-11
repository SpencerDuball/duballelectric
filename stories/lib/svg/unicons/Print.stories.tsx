import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Print, PrintPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Print",
  component: Print,
} as ComponentMeta<typeof Print>;

const Template: ComponentStory<typeof Print> = (args: PrintPropsI) => (
  <Box display="flex" gap="20px">
    <Print {...args} />
    <Print {...args} fill="red.500" />
    <Print {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
