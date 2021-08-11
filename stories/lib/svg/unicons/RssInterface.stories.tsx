import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RssInterface, RssInterfacePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RssInterface",
  component: RssInterface,
} as ComponentMeta<typeof RssInterface>;

const Template: ComponentStory<typeof RssInterface> = (
  args: RssInterfacePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <RssInterface {...args} />
    <RssInterface {...args} fill="red.500" />
    <RssInterface {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
