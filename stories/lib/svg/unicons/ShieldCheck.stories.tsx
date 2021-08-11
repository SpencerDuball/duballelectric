import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShieldCheck, ShieldCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShieldCheck",
  component: ShieldCheck,
} as ComponentMeta<typeof ShieldCheck>;

const Template: ComponentStory<typeof ShieldCheck> = (
  args: ShieldCheckPropsI
) => (
  <Box display="flex" gap="20px">
    <ShieldCheck {...args} />
    <ShieldCheck {...args} fill="red.500" />
    <ShieldCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
