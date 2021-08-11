import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Voicemail, VoicemailPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Voicemail",
  component: Voicemail,
} as ComponentMeta<typeof Voicemail>;

const Template: ComponentStory<typeof Voicemail> = (args: VoicemailPropsI) => (
  <Box display="flex" gap="20px">
    <Voicemail {...args} />
    <Voicemail {...args} fill="red.500" />
    <Voicemail {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
