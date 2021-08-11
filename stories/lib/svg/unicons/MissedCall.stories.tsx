import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MissedCall, MissedCallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MissedCall",
  component: MissedCall,
} as ComponentMeta<typeof MissedCall>;

const Template: ComponentStory<typeof MissedCall> = (
  args: MissedCallPropsI
) => (
  <Box display="flex" gap="20px">
    <MissedCall {...args} />
    <MissedCall {...args} fill="red.500" />
    <MissedCall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
