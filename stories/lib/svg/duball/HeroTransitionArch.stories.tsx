import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeroTransitionArch, HeroTransitionArchPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/HeroTransitionArch",
  component: HeroTransitionArch,
} as ComponentMeta<typeof HeroTransitionArch>;

const Template: ComponentStory<typeof HeroTransitionArch> = (
  args: HeroTransitionArchPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HeroTransitionArch {...args} />
    <HeroTransitionArch {...args} fill="red.500" />
    <HeroTransitionArch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "300px" };
