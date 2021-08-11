import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Comments, CommentsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Comments",
  component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args: CommentsPropsI) => (
  <Box display="flex" gap="20px">
    <Comments {...args} />
    <Comments {...args} fill="red.500" />
    <Comments {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
