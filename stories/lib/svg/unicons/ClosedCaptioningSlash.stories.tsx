import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  ClosedCaptioningSlash,
  ClosedCaptioningSlashPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClosedCaptioningSlash",
  component: ClosedCaptioningSlash,
} as ComponentMeta<typeof ClosedCaptioningSlash>;

const Template: ComponentStory<typeof ClosedCaptioningSlash> = (
  args: ClosedCaptioningSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <ClosedCaptioningSlash {...args} />
    <ClosedCaptioningSlash {...args} fill="red.500" />
    <ClosedCaptioningSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
