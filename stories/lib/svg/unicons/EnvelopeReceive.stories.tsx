import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeReceive, EnvelopeReceivePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeReceive",
  component: EnvelopeReceive,
} as ComponentMeta<typeof EnvelopeReceive>;

const Template: ComponentStory<typeof EnvelopeReceive> = (
  args: EnvelopeReceivePropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeReceive {...args} />
    <EnvelopeReceive {...args} fill="red.500" />
    <EnvelopeReceive {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
