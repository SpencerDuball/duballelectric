import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Postcard, PostcardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Postcard",
  component: Postcard,
} as ComponentMeta<typeof Postcard>;

const Template: ComponentStory<typeof Postcard> = (args: PostcardPropsI) => (
  <Box display="flex" gap="20px">
    <Postcard {...args} />
    <Postcard {...args} fill="red.500" />
    <Postcard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
