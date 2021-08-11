import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExternalLinkAlt, ExternalLinkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExternalLinkAlt",
  component: ExternalLinkAlt,
} as ComponentMeta<typeof ExternalLinkAlt>;

const Template: ComponentStory<typeof ExternalLinkAlt> = (
  args: ExternalLinkAltPropsI
) => (
  <Box display="flex" gap="20px">
    <ExternalLinkAlt {...args} />
    <ExternalLinkAlt {...args} fill="red.500" />
    <ExternalLinkAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
