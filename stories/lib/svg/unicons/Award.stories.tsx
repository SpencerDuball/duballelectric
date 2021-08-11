import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Award, AwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Award",
  component: Award,
} as ComponentMeta<typeof Award>;

const Template: ComponentStory<typeof Award> = (args: AwardPropsI) => (
  <Box display="flex" gap="20px">
    <Award {...args} />
    <Award {...args} fill="red.500" />
    <Award {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
