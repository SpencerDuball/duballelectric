import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WordpressSimple, WordpressSimplePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WordpressSimple",
  component: WordpressSimple,
} as ComponentMeta<typeof WordpressSimple>;

const Template: ComponentStory<typeof WordpressSimple> = (
  args: WordpressSimplePropsI
) => (
  <Box display="flex" gap="20px">
    <WordpressSimple {...args} />
    <WordpressSimple {...args} fill="red.500" />
    <WordpressSimple {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
