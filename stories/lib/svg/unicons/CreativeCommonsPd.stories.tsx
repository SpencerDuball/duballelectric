import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CreativeCommonsPd, CreativeCommonsPdPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CreativeCommonsPd",
  component: CreativeCommonsPd,
} as ComponentMeta<typeof CreativeCommonsPd>;

const Template: ComponentStory<typeof CreativeCommonsPd> = (
  args: CreativeCommonsPdPropsI
) => (
  <Box display="flex" gap="20px">
    <CreativeCommonsPd {...args} />
    <CreativeCommonsPd {...args} fill="red.500" />
    <CreativeCommonsPd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
