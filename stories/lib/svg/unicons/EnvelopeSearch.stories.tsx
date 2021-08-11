import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeSearch, EnvelopeSearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeSearch",
  component: EnvelopeSearch,
} as ComponentMeta<typeof EnvelopeSearch>;

const Template: ComponentStory<typeof EnvelopeSearch> = (
  args: EnvelopeSearchPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeSearch {...args} />
    <EnvelopeSearch {...args} fill="red.500" />
    <EnvelopeSearch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
