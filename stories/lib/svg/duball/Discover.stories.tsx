import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Discover, DiscoverPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/Discover",
  component: Discover,
} as ComponentMeta<typeof Discover>;

const Template: ComponentStory<typeof Discover> = (args: DiscoverPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Discover {...args} />
    <Discover {...args} colorPalette={["blue.500", "red.500", "green.500"]} />
    <Discover {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px" };
