import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MaximizeLeft, MaximizeLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MaximizeLeft",
  component: MaximizeLeft,
} as ComponentMeta<typeof MaximizeLeft>;

const Template: ComponentStory<typeof MaximizeLeft> = (
  args: MaximizeLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <MaximizeLeft {...args} />
    <MaximizeLeft {...args} fill="red.500" />
    <MaximizeLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
