import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RedditAlienAlt, RedditAlienAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RedditAlienAlt",
  component: RedditAlienAlt,
} as ComponentMeta<typeof RedditAlienAlt>;

const Template: ComponentStory<typeof RedditAlienAlt> = (
  args: RedditAlienAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <RedditAlienAlt {...args} />
    <RedditAlienAlt {...args} fill="red.500" />
    <RedditAlienAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
