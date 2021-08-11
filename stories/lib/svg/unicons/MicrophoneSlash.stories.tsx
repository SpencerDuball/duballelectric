import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MicrophoneSlash, MicrophoneSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MicrophoneSlash",
  component: MicrophoneSlash,
} as ComponentMeta<typeof MicrophoneSlash>;

const Template: ComponentStory<typeof MicrophoneSlash> = (
  args: MicrophoneSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MicrophoneSlash {...args} />
    <MicrophoneSlash {...args} fill="red.500" />
    <MicrophoneSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
