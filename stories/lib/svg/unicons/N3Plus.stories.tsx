import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N3Plus, N3PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N3Plus",
  component: N3Plus,
} as ComponentMeta<typeof N3Plus>;

const Template: ComponentStory<typeof N3Plus> = (args: N3PlusPropsI) => (
  <Box display="flex" gap="20px">
    <N3Plus {...args} />
    <N3Plus {...args} fill="red.500" />
    <N3Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
