import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  GlassMartiniAltSlash,
  GlassMartiniAltSlashPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GlassMartiniAltSlash",
  component: GlassMartiniAltSlash,
} as ComponentMeta<typeof GlassMartiniAltSlash>;

const Template: ComponentStory<typeof GlassMartiniAltSlash> = (
  args: GlassMartiniAltSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <GlassMartiniAltSlash {...args} />
    <GlassMartiniAltSlash {...args} fill="red.500" />
    <GlassMartiniAltSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
