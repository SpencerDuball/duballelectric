import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VoicemailRectangle, VoicemailRectanglePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VoicemailRectangle",
  component: VoicemailRectangle,
} as ComponentMeta<typeof VoicemailRectangle>;

const Template: ComponentStory<typeof VoicemailRectangle> = (
  args: VoicemailRectanglePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VoicemailRectangle {...args} />
    <VoicemailRectangle {...args} fill="red.500" />
    <VoicemailRectangle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
