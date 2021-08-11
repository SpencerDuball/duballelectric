import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeStar, EnvelopeStarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeStar",
  component: EnvelopeStar,
} as ComponentMeta<typeof EnvelopeStar>;

const Template: ComponentStory<typeof EnvelopeStar> = (
  args: EnvelopeStarPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeStar {...args} />
    <EnvelopeStar {...args} fill="red.500" />
    <EnvelopeStar {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
