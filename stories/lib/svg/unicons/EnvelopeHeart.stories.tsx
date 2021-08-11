import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeHeart, EnvelopeHeartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeHeart",
  component: EnvelopeHeart,
} as ComponentMeta<typeof EnvelopeHeart>;

const Template: ComponentStory<typeof EnvelopeHeart> = (
  args: EnvelopeHeartPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeHeart {...args} />
    <EnvelopeHeart {...args} fill="red.500" />
    <EnvelopeHeart {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
