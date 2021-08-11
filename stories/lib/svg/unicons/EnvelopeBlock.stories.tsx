import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeBlock, EnvelopeBlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeBlock",
  component: EnvelopeBlock,
} as ComponentMeta<typeof EnvelopeBlock>;

const Template: ComponentStory<typeof EnvelopeBlock> = (
  args: EnvelopeBlockPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeBlock {...args} />
    <EnvelopeBlock {...args} fill="red.500" />
    <EnvelopeBlock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
