import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ForwadedCall, ForwadedCallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ForwadedCall",
  component: ForwadedCall,
} as ComponentMeta<typeof ForwadedCall>;

const Template: ComponentStory<typeof ForwadedCall> = (
  args: ForwadedCallPropsI
) => (
  <Box display="flex" gap="20px">
    <ForwadedCall {...args} />
    <ForwadedCall {...args} fill="red.500" />
    <ForwadedCall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
