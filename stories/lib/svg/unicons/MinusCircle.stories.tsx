import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MinusCircle, MinusCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MinusCircle",
  component: MinusCircle,
} as ComponentMeta<typeof MinusCircle>;

const Template: ComponentStory<typeof MinusCircle> = (
  args: MinusCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <MinusCircle {...args} />
    <MinusCircle {...args} fill="red.500" />
    <MinusCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
