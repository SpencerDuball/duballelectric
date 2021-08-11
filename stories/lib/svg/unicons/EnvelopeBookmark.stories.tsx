import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeBookmark, EnvelopeBookmarkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeBookmark",
  component: EnvelopeBookmark,
} as ComponentMeta<typeof EnvelopeBookmark>;

const Template: ComponentStory<typeof EnvelopeBookmark> = (
  args: EnvelopeBookmarkPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeBookmark {...args} />
    <EnvelopeBookmark {...args} fill="red.500" />
    <EnvelopeBookmark {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
