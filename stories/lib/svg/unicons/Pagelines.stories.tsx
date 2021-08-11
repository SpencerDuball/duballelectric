import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pagelines, PagelinesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pagelines",
  component: Pagelines,
} as ComponentMeta<typeof Pagelines>;

const Template: ComponentStory<typeof Pagelines> = (args: PagelinesPropsI) => (
  <Box display="flex" gap="20px">
    <Pagelines {...args} />
    <Pagelines {...args} fill="red.500" />
    <Pagelines {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
