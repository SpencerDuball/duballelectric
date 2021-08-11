import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeShield, EnvelopeShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeShield",
  component: EnvelopeShield,
} as ComponentMeta<typeof EnvelopeShield>;

const Template: ComponentStory<typeof EnvelopeShield> = (
  args: EnvelopeShieldPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeShield {...args} />
    <EnvelopeShield {...args} fill="red.500" />
    <EnvelopeShield {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
