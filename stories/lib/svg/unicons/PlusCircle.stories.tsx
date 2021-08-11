import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PlusCircle, PlusCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PlusCircle",
  component: PlusCircle,
} as ComponentMeta<typeof PlusCircle>;

const Template: ComponentStory<typeof PlusCircle> = (
  args: PlusCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <PlusCircle {...args} />
    <PlusCircle {...args} fill="red.500" />
    <PlusCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
