import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Adobe, AdobePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Adobe",
  component: Adobe,
} as ComponentMeta<typeof Adobe>;

const Template: ComponentStory<typeof Adobe> = (args: AdobePropsI) => (
  <Box display="flex" gap="20px">
    <Adobe {...args} />
    <Adobe {...args} fill="red.500" />
    <Adobe {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
