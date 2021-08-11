import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeEdit, EnvelopeEditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeEdit",
  component: EnvelopeEdit,
} as ComponentMeta<typeof EnvelopeEdit>;

const Template: ComponentStory<typeof EnvelopeEdit> = (
  args: EnvelopeEditPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeEdit {...args} />
    <EnvelopeEdit {...args} fill="red.500" />
    <EnvelopeEdit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
