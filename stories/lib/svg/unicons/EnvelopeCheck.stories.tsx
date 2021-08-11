import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeCheck, EnvelopeCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeCheck",
  component: EnvelopeCheck,
} as ComponentMeta<typeof EnvelopeCheck>;

const Template: ComponentStory<typeof EnvelopeCheck> = (
  args: EnvelopeCheckPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeCheck {...args} />
    <EnvelopeCheck {...args} fill="red.500" />
    <EnvelopeCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
