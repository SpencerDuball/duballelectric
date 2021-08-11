import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Envelopes, EnvelopesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Envelopes",
  component: Envelopes,
} as ComponentMeta<typeof Envelopes>;

const Template: ComponentStory<typeof Envelopes> = (args: EnvelopesPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Envelopes {...args} />
    <Envelopes {...args} fill="red.500" />
    <Envelopes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
