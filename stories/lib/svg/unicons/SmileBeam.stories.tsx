import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SmileBeam, SmileBeamPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SmileBeam",
  component: SmileBeam,
} as ComponentMeta<typeof SmileBeam>;

const Template: ComponentStory<typeof SmileBeam> = (args: SmileBeamPropsI) => (
  <Box display="flex" gap="20px">
    <SmileBeam {...args} />
    <SmileBeam {...args} fill="red.500" />
    <SmileBeam {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
