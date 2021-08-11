import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeMinus, EnvelopeMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeMinus",
  component: EnvelopeMinus,
} as ComponentMeta<typeof EnvelopeMinus>;

const Template: ComponentStory<typeof EnvelopeMinus> = (
  args: EnvelopeMinusPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeMinus {...args} />
    <EnvelopeMinus {...args} fill="red.500" />
    <EnvelopeMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
