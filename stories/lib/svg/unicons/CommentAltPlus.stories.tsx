import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltPlus, CommentAltPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltPlus",
  component: CommentAltPlus,
} as ComponentMeta<typeof CommentAltPlus>;

const Template: ComponentStory<typeof CommentAltPlus> = (
  args: CommentAltPlusPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltPlus {...args} />
    <CommentAltPlus {...args} fill="red.500" />
    <CommentAltPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
