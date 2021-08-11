import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeShare, EnvelopeSharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeShare",
  component: EnvelopeShare,
} as ComponentMeta<typeof EnvelopeShare>;

const Template: ComponentStory<typeof EnvelopeShare> = (
  args: EnvelopeSharePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeShare {...args} />
    <EnvelopeShare {...args} fill="red.500" />
    <EnvelopeShare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
